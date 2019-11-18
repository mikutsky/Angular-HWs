import { Component, OnInit, OnDestroy } from "@angular/core";
import { SearchService, IPerson } from "src/app/services/search.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

//пока нет сервиса рботы с фтоальбомами
interface IPhoto {
  id: string;
  src: string;
  name?: string;
  data?: string;
}

@Component({
  selector: "user-page",
  templateUrl: "./user.page.component.html",
  styleUrls: ["./user.page.component.css"]
})
export class UserPageComponent implements OnInit, OnDestroy {
  public person: IPerson;
  public photos: Array<IPhoto> = Array(24).fill({
    id: "",
    src: ""
  });
  private _subscription = Subscription.EMPTY;
  private _controledURL: string = "user";

  private reloadContent(id: string): void {
    if (!id) {
      this.router.navigate(["**"]);
    }
    let newPrs: IPerson;
    this.searchService._fakeGET_personById(id).subscribe(
      (data: IPerson) => (newPrs = data),
      err => console.log(err),
      () => (this.person = newPrs)
    );
  }

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.photos=this.photos.map(
      (el: IPhoto, i: number): IPhoto => ({
        name: "Name " + i.toString(),
        src: `./assets/photos/photo-${("0"+i.toString()).slice(-2)}.jpg`,
        id: i.toString(),
        data: "01-02-23"
      })
    );
    console.log(this.photos[1].src);
  }

  ngOnInit(): void {
    this._subscription = this.activatedRoute.queryParamMap.subscribe(
      queryParams => {
        const id = queryParams.get("id");

        const searchURL = `/${this._controledURL}?id=`;
        const url = this.router.url.slice(0, searchURL.length);
        if (searchURL === url) this.reloadContent(id);
      }
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
