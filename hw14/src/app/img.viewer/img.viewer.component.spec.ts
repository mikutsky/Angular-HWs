import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ImgViewerComponent } from "./img.viewer.component";

describe("ImgControlComponent", () => {
  let fixture: ComponentFixture<ImgViewerComponent>;
  let component: ImgViewerComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ImgViewerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgViewerComponent);
    component = fixture.componentInstance;
  });

  it("Should create an instance image view component.", () => {
    expect(component).toBeTruthy();
  });

  // правильный выбор картинок
  it("should render <img>", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("img").alt).toContain("empty");
    expect(compiled.querySelector("img").title).toContain("empty");
    expect(compiled.querySelector("img").src).toContain(
      "/assets/img.service/photo.empty.jpg"
    );
  });
});
