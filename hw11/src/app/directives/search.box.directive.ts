import { Directive, OnInit, HostListener, ElementRef } from "@angular/core";

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

  @HostListener("click", ['$event'])
  public focusinHandler({ target }: Event): void {
    this.toggle(target === this._elSearch);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick({ target }: Event): void {
    if (!(target as HTMLElement).closest('[searchBox]')) {
      this.toggle(false);
    }
  }

  private toggle(isOpen: boolean): void {
    this._elSearch.style.borderRadius =  isOpen ? this._modifyBorderRadius : this._defaultBorderRadius;
    this._elHelper.style.display = isOpen ? this._elHelperVisible : this._elHelperInvisible;
  }
}
