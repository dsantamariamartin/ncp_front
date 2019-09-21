import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './table/table.component';
import { ChartsDashboardComponent } from './charts-dashboard/charts-dashboard.component';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';
import {FormDashboardComponent} from './form-dashboard/form-dashboard.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
