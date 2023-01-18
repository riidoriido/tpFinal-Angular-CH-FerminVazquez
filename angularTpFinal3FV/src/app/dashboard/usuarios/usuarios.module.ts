import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosPageComponent } from './pages/usuarios-page/usuarios-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [UsuariosPageComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class UsuariosModule {}
