import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { NavComponent } from './layout/nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './layout/header/header.component';
import { UsuariosPageComponent } from './usuarios/pages/usuarios-page/usuarios-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PageWrapperComponent,
    NavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatSidenavModule,
    DashboardRoutingModule,
    MatToolbarModule,
  ],
})
export class DashboardModule {}
