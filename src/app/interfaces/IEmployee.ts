import {ILocation} from "./ILocation";
import {ILogin} from "./ILogin";
import {IName} from "./IName";

export interface IEmployee {
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: {
    date: number;
  };
  phone: number;
  cell: number;
  id: {
    name: string,
    value: number
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
}
