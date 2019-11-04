import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeComponent} from "./employee/employee.component";


const routes: Routes = [
  {path: '', component : EmployeeComponent},
	{path: 'employee', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
	EmployeeListComponent,
	EmployeeComponent
];
