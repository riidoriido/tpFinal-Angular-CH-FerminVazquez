import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdMockPageComponent } from './pages/prod-mock-page/prod-mock-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProdMockPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdMockRoutingModule {}
