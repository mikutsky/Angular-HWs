import {
  Directive,
  Input,
  OnInit,
  HostListener,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[hoverBorder]"
})
export class HoverBorderDirective implements OnInit {
  private _element: HTMLElement;

  @Input()
  public default: string = "none";
  @Input()
  public stHover: string = "2px solid white";
  @Input()
  public stClick: string = "4px solid white";

  constructor(element: ElementRef) {
    this._element = element.nativeElement;
  }

  public ngOnInit(): void {
    this._element.style.boxSizing = "border-box";
    this._element.style.border = this.default;
  }

  @HostListener("mouseenter")
  public enterHandler(): void {
    this._element.style.border = this.stHover;
  }

  @HostListener("mouseleave")
  public leaveHandler(): void {
    this._element.style.border = this.default;
  }

  @HostListener("mousedown")
  public downHandler(): void {
    this._element.style.border = this.stClick;
  }

  @HostListener("mouseup")
  public upHandler(): void {
    this._element.style.border = this.stHover;
  }
}
