import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ListEmployeeServices extends DataService {

	constructor(httpClient: HttpClient) {
		super('https://jsonplaceholder.typicode.com/users', httpClient);
	}
}
