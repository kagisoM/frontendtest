import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from "../interfaces/IEmployee";

const apiURL = 'https://randomuser.me/api/';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getEmployee(): Promise<IEmployee[]> {
    return this.http.get(apiURL).toPromise().then((response: any) => {
      return response.results as IEmployee[];
    });
  }
}
