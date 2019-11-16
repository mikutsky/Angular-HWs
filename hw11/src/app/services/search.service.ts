import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { take, map } from "rxjs/internal/operators";

const httpUrl = "assets/people/people.response.json";

// const { random, floor } = Math;
// const { setInterval, clearInterval } = window;

export interface IPerson {
  id: string;
  url: string;
  src?: string;
  nickname?: string;
  name?: string;
  surename?: string;
  subscriben?: string;
  photos?: number;
  followers?: number;
  followings?: number;
  likes?: number;
}

@Injectable()
export class SearchService {
  private _filter(person: IPerson, searchString: string): boolean {
    const personStr = `
    ${person.name} ${person.surename}
    ${person.nickname} ${person.subscriben}
    ${person.url}
    `.toUpperCase();
    return searchString
      .toUpperCase()
      .split(" ")
      .every((str: string) => personStr.includes(str));
  }

  public searchPerson(
    count: number = 10,
    searchString: string = ""
  ): Observable<Array<IPerson>> {
    if (count < 0) count = 1;
    if (count > 10) count = 10;
    return this.http.get<Array<IPerson>>(httpUrl).pipe(
      map((personList: Array<IPerson>) =>
        personList.filter((person: IPerson) =>
          this._filter(person, searchString)
        )
      ),
      take(count)
    );
  }

  constructor(private http: HttpClient) {}
}
