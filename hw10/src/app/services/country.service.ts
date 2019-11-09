import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const httpUrl = "https://restcountries.eu/rest/v2/name/netherlands";

export interface ICountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  callingCodes: string[];
  flag: string;
  capital: string;
}

@Injectable()
export class CoutryService {
  public getCountryData(): Observable<Array<ICountry>> {
    return this.http.get<Array<ICountry>>(httpUrl);
  }
  constructor(private http: HttpClient) {}
}
