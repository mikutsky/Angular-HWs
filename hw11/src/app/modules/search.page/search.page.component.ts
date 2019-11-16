import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SearchService, IPerson } from "src/app/services/search.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "search-page",
  templateUrl: "./search.page.component.html",
  styleUrls: ["./search.page.component.css"]
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public personList: Array<IPerson>;
  public searchText: string;
  private subscription = Subscription.EMPTY;

  constructor(
    private searchService: SearchService,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.activateRoute.queryParamMap
      .subscribe(queryParams => {
        const q = queryParams.get('q');
        this.searchService
          .searchPerson(10, q)
          .subscribe((data: Array<IPerson>) => (this.personList = data));
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
