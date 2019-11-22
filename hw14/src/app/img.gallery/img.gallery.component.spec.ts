import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ImgGalleryComponent } from "./img.gallery.component";

describe("ImgControlComponent", () => {
  let fixture: ComponentFixture<ImgGalleryComponent>;
  let component: ImgGalleryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ImgGalleryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGalleryComponent);
    component = fixture.componentInstance;
  });

  it("Should create an instance image gallery component.", () => {
    expect(component).toBeTruthy();
  });

  // правильный выбор картинок
  it("should render <img>'s", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    for (let i = 0; i < 4; i++) {
      expect(
        compiled.querySelector(".img-gallery-container").children[i].alt
      ).toContain(`Alt-${i + 1}`);
      expect(
        compiled.querySelector(".img-gallery-container").children[i].title
      ).toContain(`Title-${i + 1}`);
      expect(
        compiled.querySelector(".img-gallery-container").children[i].src
      ).toContain(`/assets/img.service/photo-0${i + 1}.jpg`);
    }
  });

  it("Should create an instance image control component.", () => {
    expect(component).toBeTruthy();
  });
});
