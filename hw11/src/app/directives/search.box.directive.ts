import { Directive, OnInit, HostListener, ElementRef } from "@angular/core";

const { setTimeout } = window;

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

  constructor({ nativeElement: element }: ElementRef) {
    this._element = element;
  }

  public ngOnInit(): void {
    this._elSearch = this._element.querySelector("input");
    this._elHelper = this._element.lastChild as HTMLElement;
    this._elSearch.style.borderRadius = this._defaultBorderRadius;
    this._elHelper.style.display = this._elHelperInvisible;
  }

  @HostListener("focusin")
  public focusinHandler(): void {
    this._elSearch.style.borderRadius = this._modifyBorderRadius;
    this._elHelper.style.display = this._elHelperVisible;
  }

  @HostListener("focusout")
  public focusoutHandler(): void {
    // Мой постыдный костыль!
    setTimeout(() => {
      this._elSearch.style.borderRadius = this._defaultBorderRadius;
      this._elHelper.style.display = this._elHelperInvisible;
    }, 500);
  }
}
