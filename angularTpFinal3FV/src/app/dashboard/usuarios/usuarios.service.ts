import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable, take, tap } from 'rxjs';

export interface Usuario {
  userId: string;
  name: string;
  email: string;
  isAdmin: boolean;
  id: number;
}

export interface IUsersService {
  usuarios$: Observable<Usuario[]>;
  cargarUsuarios(): void;
  crearUsuario(data: Pick<Usuario, 'userId' | 'email'>): void;
}

@Injectable({
  providedIn: 'root',
})
export class UsuariosService implements IUsersService {
  private readonly baseUrl =
    'https://63c83403075b3f3a91dc84e9.mockapi.io/apiFV/';
  private usuarios = new BehaviorSubject<Usuario[]>([]);
  public usuarios$: Observable<Usuario[]>;
  constructor(private httpClient: HttpClient) {
    this.usuarios$ = this.usuarios.asObservable();
  }

  cargarUsuarios() {
    this.httpClient
      .get<Usuario[]>(`${this.baseUrl}/users`)
      .subscribe((apiUsers) => {
        this.usuarios.next(apiUsers);
      });
  }

  crearUsuario(data: Pick<Usuario, 'userId' | 'email'>) {
    this.usuarios$
      .pipe(
        take(1),
        mergeMap((currentUsers) =>
          this.httpClient
            .post<Usuario>(`${this.baseUrl}/users`, data)
            .pipe(
              tap((createdUsers) =>
                this.usuarios.next([...currentUsers, createdUsers])
              )
            )
        )
      )
      .subscribe();
  }
}
