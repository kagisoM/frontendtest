import { Component, OnInit } from '@angular/core';
import {ListEmployeeServices} from "../services/listEmployee.services";
import {IFilter} from "../interfaces/IFilter";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	constructor(
		private readonly  service: ListEmployeeServices) {

			this.filteredEmployee = this.employee;
			this.listFilter = '';
	}

	ngOnInit() {
		this.service.getAll()
			.subscribe(employee => this.employee = employee);
		console.log(this.employee);
	}

	employee: any[];
	pageTitle= "Employee List";
	_listFilter = '';
	get listFilter(): string {
		return this._listFilter;
	}

	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredEmployee = this.listFilter ? this.doFilter(this.listFilter) : this.employee;
	}

	filteredEmployee: IFilter[] = [];


	doFilter(filterBy: string): IFilter[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.employee.filter((myEmployee: IFilter) =>
			myEmployee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}

}
