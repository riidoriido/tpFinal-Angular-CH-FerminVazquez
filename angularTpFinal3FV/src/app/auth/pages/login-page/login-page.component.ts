import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnDestroy {
  public loading = false;
  public form = new FormGroup({
    email: new FormControl('rachel.howell@reqres.in', [Validators.required]),
    password: new FormControl('thisCityWillEnd1995_', [Validators.required]),
  });
  private destroyed$ = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

  login() {
    this.loading = true;
    this.authService
      .login({
        email: this.form.get('email')?.value || '',
        password: this.form.get('password')?.value || '',
      })
      .subscribe((user) => {
        this.loading = false;
        if (user) {
          this.router.navigate(['dashboard', 'estudiantes']);
        }
      });
  }
}
