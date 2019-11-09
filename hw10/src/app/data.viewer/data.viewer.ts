import { Component, OnInit } from "@angular/core";
import { CoutryService, ICountry } from "../services/country.service";

@Component({
  selector: "data-viewer",
  template: `
    <h2>Данные по странам:</h2>
    <div>
      <p *ngFor="let country of countries">
        <li>
          name: <strong>{{ country.name }}</strong
          ><br />
          <img [src]="country.flag" width="200px" alt="Флаг" title="Флаг" />
        </li>
        <li>
          Top level domain: <strong>{{ country.topLevelDomain }}</strong>
        </li>
        <li>
          alpha2Code: <strong>{{ country.alpha2Code }}</strong>
        </li>
        <li>
          callingCodes: <strong>{{ country.callingCodes }}</strong>
        </li>
        <li>
          capital: <strong>{{ country.capital }}</strong>
        </li>
      </p>
    </div>
  `
})
export class DataViewerComponent implements OnInit {
  public countries: Array<ICountry>;

  constructor(private service: CoutryService) {}

  public ngOnInit(): void {
    this.service.getCountryData().subscribe((data: Array<ICountry>) => {
      this.countries = data;
    });
  }
}
