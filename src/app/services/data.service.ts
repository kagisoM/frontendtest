import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private httpClient: HttpClient) { }

	getAll() {
	return this.httpClient.get(this.url)
			.pipe(map((response: any) => response))
	}

}
