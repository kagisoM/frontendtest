import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

	getContactMethods() {
		const contact = [
			{id:1, name: "BillBoard"},
			{id:2, name: "Newsletter"},
			{id:3, name: "NewsPaper"},
			{id:4, name: "Friend"},
			{id:5, name: "Tv Ad"},
		];
		return contact;
	}
}
