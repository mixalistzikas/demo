import { DashboardComponent } from './main/admin/dashboard/dashboard.component';
import { CompaniesComponent } from './main/admin/companies/companies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './core/layouts/full/full-layout.component';
import { CompanyComponent } from './main/admin/companies/company.component';
import { MinimalLayoutComponent } from './core/layouts/minimal/minimal-layout.component';

const appRoutes: Routes = [
   {
      path: 'companies',
      component: FullLayoutComponent,
      children: [
         {
            path: '',
            component: CompaniesComponent
         },
         {
            path: 'company/:id',
            component: CompanyComponent
         }
      ]
   },
   {
      path: 'users',
      component: MinimalLayoutComponent,
      loadChildren: './main/admin/users/users.module#UsersModule'
   },
   {
      path: 'dashboard',
      component: MinimalLayoutComponent,
      children: [
         {
            path: '',
            component: DashboardComponent
         }
      ]
   },
   {
      path: '**',
      redirectTo: '/companies'
   }
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule]
})

export class AppRoutingModule {
}
