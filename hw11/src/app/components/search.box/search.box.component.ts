import { Component, OnInit, OnDestroy } from "@angular/core";
import { SearchService, IPerson } from "src/app/services/search.service";
import { Router, Event, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs";

const { clearTimeout, setTimeout } = window;

interface IHelpItem {
  text: string;
  href: string;
}

@Component({
  selector: "search-box",
  templateUrl: "./search.box.component.html",
  styleUrls: ["./search.box.component.css"]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private _interval: number;
  private _changeInterval: number;
  private _hintCount: number;
  private _controledURL: string;
  private _subscription = Subscription.EMPTY;

  public searchText: string;
  public hintList: Array<IHelpItem>;
  public clicked: boolean = false;

  private _clearHint(): void {
    this.hintList = [];
    this.hintList.slice(0);
  }

  private _reloadHint(): void {
    let reloadHint: Array<IHelpItem> = [];
    this.searchService.searchPerson(this.searchText, this._hintCount).subscribe(
      (data: Array<IPerson>) => {
        reloadHint = data.map((person: IPerson) => ({
          text: `${person.name} ${person.surename}`,
          href: person.url
        }));
      },
      err => {
        console.log(err);
      },
      () => (this.hintList = reloadHint)
    );
  }

  public onChange(): void {
    clearTimeout(this._changeInterval);
    this._changeInterval = setTimeout(() => this._reloadHint(), this._interval);
  }

  public onSelect(hintItem: IHelpItem): void {
    this.searchText = hintItem.text;
    this.onSearch();
  }

  public onSearch(): void {
    this.router.navigate([this._controledURL], {
      queryParams: {
        q: this.searchText
      }
    });
    this.onChange();
  }

  constructor(private searchService: SearchService, private router: Router) {
    this._hintCount = 10;
    this._interval = 500;
    this._clearHint();
    this._reloadHint();
    this._controledURL = "search";
    this.searchText = "";
  }

  public ngOnInit(): void {
    this._subscription = this.router.events.subscribe((event: Event) => {
      const searchURL = `/${this._controledURL}?q=`;
      const url = this.router.url.slice(0, searchURL.length);

      if (event instanceof NavigationEnd && url !== searchURL)
        this.searchText = "";
      this.onChange();
    });
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
