import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { ChartsDashboardComponent } from './charts-dashboard/charts-dashboard.component';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';
import {TableComponent} from './table/table.component';
import {LayoutModule} from '@angular/cdk/layout';
import { FormDashboardComponent } from './form-dashboard/form-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';
import {UserService} from './user/user.service';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './services/register.service'

@NgModule({
   declarations: [
      AppComponent,
      TableComponent,
      ChartsDashboardComponent,
      CardsDashboardComponent,
      FormDashboardComponent,
      LoginComponent,
      DashboardComponent,
      HeaderComponent,
      AlertComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatIconModule,
      FlexLayoutModule,
      MatTableModule,
      LayoutModule,
      MatInputModule,
      GoogleChartsModule,
      FormsModule,
      ReactiveFormsModule,
      MatCheckboxModule,
      MatRadioModule,
      MatSelectModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatMenuModule
   ],
   providers: [
      LoginService,
      UserService,
      RegisterService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
