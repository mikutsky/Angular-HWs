import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import {
  delay,
  skip,
  concatMap,
  bufferCount,
  finalize,
  filter,
  skipWhile,
  find,
  take
} from "rxjs/internal/operators";

const httpUrl = "assets/people/people.response.json";
const _fakePing: number = 250;

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
  private _fakeGET_personArrBySearch(
    search: string = "",
    count: number = 10,
    afterId: string = "" //для динамческой загрузки при скролинге
  ): Observable<Array<IPerson>> {
    return this.http
      .get<Array<IPerson>>(httpUrl)
      .pipe(
        delay(_fakePing),
        concatMap(
          (personArr: Array<IPerson>): Observable<IPerson> => from(personArr)
        )
      )
      .pipe(
        skipWhile((person: IPerson): boolean =>
          afterId ? person.id !== afterId : false
        ),
        skip(afterId ? 1 : 0)
      )
      .pipe(filter((person: IPerson): boolean => this._filter(person, search)))
      .pipe(bufferCount(count), take(1));
  }

  private _fakeGET_personByUrl(url: string): Observable<IPerson> {
    return this.http
      .get<Array<IPerson>>(httpUrl)
      .pipe(
        delay(_fakePing),
        concatMap(
          (personArr: Array<IPerson>): Observable<IPerson> => from(personArr)
        )
      )
      .pipe(find((person: IPerson): boolean => person.url === url));
  }

  public _fakeGET_personById(id: string): Observable<IPerson> {
    return this.http
      .get<Array<IPerson>>(httpUrl)
      .pipe(
        delay(_fakePing),
        concatMap(
          (personArr: Array<IPerson>): Observable<IPerson> => from(personArr)
        )
      )
      .pipe(find((person: IPerson): boolean => person.id === id));
  }

  private _filter(person: IPerson, search: string): boolean {
    const personStr = `
    ${person.name} ${person.surename}
    `.toUpperCase();
    return search
      ? search
          .toUpperCase()
          .split(" ")
          .every((str: string): boolean => personStr.includes(str))
      : true;
  }

  public searchPerson(
    search: string = "",
    count: number = 10,
    afterId: string = ""
  ): Observable<Array<IPerson>> {
    return this._fakeGET_personArrBySearch(search, count, afterId);
  }

  constructor(private http: HttpClient) {}
}
