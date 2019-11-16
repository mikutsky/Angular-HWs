import { Component, OnInit, OnDestroy } from "@angular/core";
import { SearchService, IPerson } from "src/app/services/search.service";
import { Router, Event } from "@angular/router";
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
  private _urlSubscription: Subscription;

  public searchText: string;
  public hintList: Array<IHelpItem>;

  private _clearHint(): void {
    this.hintList = [];
    this.hintList.slice(0);
  }

  private _reloadHint(): void {
    this.searchService.searchPerson(this._hintCount, this.searchText).subscribe(
      (data: Array<IPerson>) =>
        (this.hintList = data.map((person: IPerson) => ({
          text: `${person.name} ${person.surename}`,
          href: person.url
        })))
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
    // Как перезагрузить страницу с другими параметрами?
    // все найденные мной методы - странные
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
    this._urlSubscription = this.router.events.subscribe((event: Event) => {
      // буду очищать this.SearchText, когда уходим с /search
      // console.log(this.router.url.slice(1,this._controledURL.length+1));
    });
  }

  public ngOnDestroy(): void {
    this._urlSubscription.unsubscribe();
  }
}
