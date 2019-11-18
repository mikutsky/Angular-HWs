import {
  Directive,
  Input,
  OnInit,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[toolButton]"
})
export class ToolButtonDirective implements OnInit {
  @HostBinding("style.opacity")
  private _opacity: string = "1.000";

  @Input()
  private default: string = "0.333";
  @Input()
  private stHover: string = "1";
  @Input()
  private stClick: string = "0.75";

  public ngOnInit(): void {
    this._opacity = this.default;
  }

  @HostListener("mouseenter")
  public enterHandler(): void {
    this._opacity = this.stHover;
  }

  @HostListener("mouseleave")
  public leaveHandler(): void {
    this._opacity = this.default;
  }

  @HostListener("mousedown")
  public downHandler(): void {
    this._opacity = this.stClick;
  }

  @HostListener("mouseup")
  public upHandler(): void {
    this._opacity = this.stHover;
  }
}
