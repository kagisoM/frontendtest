import {IAddress} from "./IAddress";

export interface IFilter {
	id: number;
	name: string;
	email: string;
	username: string;
	address: IAddress;
}
