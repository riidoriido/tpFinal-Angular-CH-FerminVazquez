import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantespageComponent } from './pages/estudiantespage/estudiantespage.component';
import { EstudiantesdialogComponent } from './estudiantesdialog/estudiantesdialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [EstudiantespageComponent, EstudiantesdialogComponent],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule,
  ],
})
export class EstudiantesModule {}
