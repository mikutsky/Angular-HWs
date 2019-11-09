import {
  Directive,
  Input,
  OnInit,
  HostListener,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[controlViewer]"
})
export class ControlViewerDirective implements OnInit {
  private _element: HTMLElement;

  @Input()
  public default: string;
  @Input()
  public stHover: string;
  @Input()
  public stClick: string;

  constructor(element: ElementRef) {
    this._element = element.nativeElement;
  }

  public ngOnInit() {
    this.default = this._element.style.opacity;
    this.stHover = "0.8";
    this.stClick = "0.4";
  }

  @HostListener("mouseenter")
  public enterHandler(): void {
    this._element.style.opacity = this.stHover;
  }

  @HostListener("mouseleave")
  public leaveHandler(): void {
    this._element.style.opacity = this.default;
  }

  @HostListener("mousedown")
  public downHandler(): void {
    this._element.style.opacity = this.stClick;
  }

  @HostListener("mouseup")
  public upHandler(): void {
    this._element.style.opacity = this.stHover;
  }
}
