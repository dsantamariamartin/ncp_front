import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './table/table.component';
import { ChartsDashboardComponent } from './charts-dashboard/charts-dashboard.component';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';
import {FormDashboardComponent} from './form-dashboard/form-dashboard.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './register/register.component';
const routes: Routes = [
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'charts',
    component: ChartsDashboardComponent
  },
  {
    path: 'cards',
    component: CardsDashboardComponent
  },
  {
    path: 'form',
    component: FormDashboardComponent
  },
  { path: '',
  component: LoginComponent},

  { path: 'dashboard',
  component: DashboardComponent},
  { path: 'register',
  component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
