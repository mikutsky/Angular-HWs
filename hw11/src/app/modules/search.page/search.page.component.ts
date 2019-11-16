import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SearchService, IPerson } from "src/app/services/search.service";
import { HostListener } from "@angular/core";

@Component({
  selector: "search-page",
  templateUrl: "./search.page.component.html",
  styleUrls: ["./search.page.component.css"]
})
export class SearchPageComponent {
  public personList: Array<IPerson>;
  public searchText: string;

  constructor(
    private searchService: SearchService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {

    this.searchText = activateRoute.snapshot.queryParams["q"];
    searchService
      .searchPerson(10, this.searchText)
      .subscribe((data: Array<IPerson>) => (this.personList = data));
  }

  public onRelod() {}

  @HostListener("onload")
  public onloadHandle(): void {
    console.log("asd");
  }
}
