import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { TaskTextComponent } from "./task.text/task.text.component";
import { ImgControlComponent } from "./img.control/img.control.component";
import { ImgGalleryComponent } from "./img.gallery/img.gallery.component";
import { ImgViewerComponent } from "./img.viewer/img.viewer.component";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TaskTextComponent,
        ImgControlComponent,
        ImgGalleryComponent,
        ImgViewerComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Homework №14'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Homework №14");
  });

  it("should render title", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Homework №14");
  });

  it("should render task text", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h4").textContent).toContain(
      "Написать тесты для компонентов модуля галерея. Проверять:"
    );
  });

  it("should render task items", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("ul").children[0].textContent).toContain(
      "рендеринг компонентов"
    );
    expect(compiled.querySelector("ul").children[1].textContent).toContain(
      "правильный выбор картинок"
    );
    expect(compiled.querySelector("ul").children[2].textContent).toContain(
      "ереключение активного изображения"
    );
  });
});
