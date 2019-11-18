import { Directive, OnInit, HostListener, ElementRef } from "@angular/core";
import { Subscription } from "rxjs";

@Directive({
  selector: "[searchBox]"
})
export class SearchBoxDirective implements OnInit {
  private _element: HTMLElement;

  private _elSearch: HTMLElement;
  private _elHelper: HTMLElement;
  private _defaultBorderRadius: string = "26px";
  private _modifyBorderRadius: string = "26px 26px 0 0";
  private _elHelperInvisible: string = "none";
  private _elHelperVisible: string = "block";

  private _subscription = Subscription.EMPTY;

  constructor({ nativeElement: element }: ElementRef) {
    this._element = element;
  }

  public ngOnInit(): void {
    this._elSearch = this._element.querySelector("input");
    this._elHelper = this._element.lastChild as HTMLElement;
    this._elSearch.style.borderRadius = this._defaultBorderRadius;
    this._elHelper.style.display = this._elHelperInvisible;
  }

  // Получен фокус каким-то элементом.
  // Работает так же при получении фокуса с помощью Tab.
  @HostListener("document:focusin")
  public onSearchFocusin(): void {
    this.toggle();
  }

  // Получен клик каким-то элементом.
  // с target - работает не всегда. Элемент, получивший фокус, не всегда тот
  // элемент, на котором сработал клик. Поэтому фокус проверяю явно в toogle()
  @HostListener("document:click")
  onDocumentClick(): void {
    this.toggle();
  }

  private toggle(): void {
    const isOpen = document.activeElement === this._elSearch;
    this._elSearch.style.borderRadius = isOpen
      ? this._modifyBorderRadius
      : this._defaultBorderRadius;
    this._elHelper.style.display = isOpen
      ? this._elHelperVisible
      : this._elHelperInvisible;
  }
}
