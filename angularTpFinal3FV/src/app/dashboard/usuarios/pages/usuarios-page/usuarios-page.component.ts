import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { Usuario, UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.scss'],
})
export class UsuariosPageComponent implements OnInit, OnDestroy {
  public form = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private usuariosService: UsuariosService,
    private readonly dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.usuariosService.cargarUsuarios();
    this.usuarios = this.usuariosService.usuarios$;
  }

  crearUsuario() {
    if (this.form.valid) {
      this.usuariosService.crearUsuario(
        this.form.value as Pick<Usuario, 'userId' | 'name' | 'email'>
      );
    } else {
      alert('El formulario es invalido');
    }
  }

  displayedColumns = ['id', 'userId', 'name', 'email'];
  usuarios: Observable<Usuario[]>;
  private destroyed$ = new Subject();

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}
