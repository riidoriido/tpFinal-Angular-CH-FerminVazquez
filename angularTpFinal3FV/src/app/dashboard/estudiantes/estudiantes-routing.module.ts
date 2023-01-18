import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantespageComponent } from './pages/estudiantespage/estudiantespage.component';

const routes: Routes = [
  {
    path: '',
    component: EstudiantespageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantesRoutingModule {}
