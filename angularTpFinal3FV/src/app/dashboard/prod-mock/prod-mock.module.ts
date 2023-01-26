import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdMockRoutingModule } from './prod-mock-routing.module';
import { ProdMockPageComponent } from './pages/prod-mock-page/prod-mock-page.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
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
