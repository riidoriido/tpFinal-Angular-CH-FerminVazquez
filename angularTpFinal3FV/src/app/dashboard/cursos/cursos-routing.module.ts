import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosDetailComponent } from './pages/cursos-detail/cursos-detail.component';
import { CursosPagesComponent } from './pages/cursos-pages/cursos-pages.component';

const routes: Routes = [
  { path: '', component: CursosPagesComponent },
  { path: ':cursoId', component: CursosDetailComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
