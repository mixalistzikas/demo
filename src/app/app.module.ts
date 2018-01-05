import { MinimalLayoutComponent } from './core/layouts/minimal/minimal-layout.component';
import { CompanyComponent } from './main/admin/companies/company.component';
import { CompaniesComponent } from './main/admin/companies/companies.component';
import { AppRoutingModule } from './app.routing.module';
import { FullLayoutComponent } from './core/layouts/full/full-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './core/modules/shared.module';
import { DashboardComponent } from './main/admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    MinimalLayoutComponent,
    DashboardComponent,
    CompaniesComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
