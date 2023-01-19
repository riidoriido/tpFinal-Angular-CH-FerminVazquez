import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'estudiantes',
        loadChildren: () =>
          import('./estudiantes/estudiantes.module').then(
            (module) => module.EstudiantesModule
          ),
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./cursos/cursos.module').then(
            (module) => module.CursosModule
          ),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./usuarios/usuarios.module').then(
            (module) => module.UsuariosModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./prod-mock/prod-mock.module').then(
            (module) => module.ProdMockModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
