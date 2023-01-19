import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosPagesComponent } from './pages/cursos-pages/cursos-pages.component';
import { CursosDetailComponent } from './pages/cursos-detail/cursos-detail.component';
@NgModule({
  declarations: [CursosPagesComponent, CursosDetailComponent],
  imports: [CommonModule, CursosRoutingModule, SharedModule],
})
export class CursosModule {}
