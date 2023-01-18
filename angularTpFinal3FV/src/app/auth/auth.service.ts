import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, mergeMap, map, of, catchError } from 'rxjs';
import { SessionService } from '../core/services/session.service';
import {
  LoginSuccessful,
  SingleUserResponse,
} from '../models/reqres.interfaces';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://reqres.in/api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.httpClient
      .post<LoginSuccessful>(`${this.apiUrl}/login`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() =>
          this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/12`)
        ),
        map(
          ({ data }) =>
            new User(
              data.id,
              data.email,
              data.first_name,
              data.last_name,
              data.avatar
            )
        ),
        tap((user) => this.sessionService.setUser(user))
      );
  }

  logOut() {
    localStorage.removeItem('token');
    this.sessionService.setUser(null);
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const lsToken = localStorage.getItem('token');

    return of(lsToken).pipe(
      tap((token) => {
        if (!token) throw new Error('Token invalido');
      }),
      mergeMap((token) =>
        this.httpClient.get<SingleUserResponse>(`${this.apiUrl}/users/12`)
      ),
      tap(({ data }) =>
        this.sessionService.setUser(
          new User(
            data.id,
            data.email,
            data.first_name,
            data.last_name,
            data.avatar
          )
        )
      ),
      map((user) => !!user),
      catchError(() => of(false))
    );
  }
}
