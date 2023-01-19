import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { CursoCardComponent } from './components/curso-card/curso-card.component';

@NgModule({
  declarations: [CursoCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, CursoCardComponent],
})
export class SharedModule {}
