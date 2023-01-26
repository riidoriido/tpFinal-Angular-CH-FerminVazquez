import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdMockRoutingModule } from './prod-mock-routing.module';
import { ProdMockPageComponent } from './pages/prod-mock-page/prod-mock-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProdMockPageComponent],
  imports: [
    CommonModule,
    ProdMockRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ProdMockModule {}
