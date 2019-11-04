import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {IEmployee} from "../interfaces/IEmployee";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: IEmployee;
  employeeImageUrl;
	label;
	value;
	defaultActive = true;

  constructor(@Inject(LOCALE_ID) private readonly locale: string,
  private readonly employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee().then(response => {
      this.employee = response[0];
      this.employeeImageUrl = this.employee.picture.large;
      this.mouseEnterHandler('user');
    }
  );
  }
  mouseEnterHandler(anchorName) {
	switch (anchorName) {
		case 'user':
			this.label = "Hi, My name is";
			this.value = `${this.employee.name.first} ${this.employee.name.last}`;
			break;
		case 'email':
			this.defaultActive = false;
			this.label = "My email address is";
			this.value = `${this.employee.email}`;
			break;
		case 'calendar':
			this.defaultActive = false;
			this.label = "My birthday is";
			this.value = formatDate(this.employee.dob.date, "dd/MM/yyyy", this.locale);
			break;
		case 'map-location':
			this.defaultActive = false;
			this.label = "My address is";
			this.value = `${this.employee.location.city}`;
			break;
		case 'call':
			this.defaultActive = false;
			this.label = "My phone number is";
			this.value = `${this.employee.phone}`;
			break;
		case 'locked':
			this.defaultActive = false;
			this.label = "My password is";
			this.value = `${this.employee.login.password}`;
			break;
		default:
	}
}
}
