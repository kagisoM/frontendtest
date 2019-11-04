import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AnchorComponent } from './anchor/anchor.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {RouterModule} from "@angular/router";
import {ContactsService} from "./services/contacts.service";
import {ListEmployeeServices} from "./services/listEmployee.services";
import {FavouriteComponent} from "./favourite/favourite.component";
import {AuthService} from "./services/auth.service";
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {map} from "rxjs/operators";
//import {Observable} from "rxjs/Observable";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    AnchorComponent,
    EmployeeListComponent,
	  routingComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
	  {
		  path: '',
		  component:  EmployeeComponent
	  },
	  {
		  path: 'employee',
		  component:  EmployeeDetailsComponent
	  },
	  ])
  ],
  providers: [
    ContactsService,
    ListEmployeeServices,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
