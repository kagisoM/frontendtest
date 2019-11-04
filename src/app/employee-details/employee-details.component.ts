import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

	@Input() label;
	@Input() value;

	constructor() {
	}

	ngOnInit() {
	}

}
