import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SearchService, IPerson } from "src/app/services/search.service";
import { Subscription } from "rxjs";

@Component({
  selector: "search-page",
  templateUrl: "./search.page.component.html",
  styleUrls: ["./search.page.component.css"]
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public personList: Array<IPerson>;
  private _urlSubscription: Subscription;

  public reloadSearchContent(searchText: string): void {
    this.searchService
      .searchPerson(10, searchText)
      .subscribe((data: Array<IPerson>) => (this.personList = data));
  }

  constructor(
    private searchService: SearchService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.reloadSearchContent(this.activateRoute.snapshot.queryParams["q"]);
  }

  public ngOnInit(): void {
    this._urlSubscription = this.router.events.subscribe(event => {
      this.reloadSearchContent(this.activateRoute.snapshot.queryParams["q"]);
    });
  }

  public ngOnDestroy(): void {
    this._urlSubscription.unsubscribe();
  }
}
