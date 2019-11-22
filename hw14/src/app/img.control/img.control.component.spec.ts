import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ImgControlComponent } from "./img.control.component";
import { ImgGalleryComponent } from "../img.gallery/img.gallery.component";
import { ImgViewerComponent } from "../img.viewer/img.viewer.component";
import { By } from "@angular/platform-browser";

describe("ImgControlComponent", () => {
  let fixture: ComponentFixture<ImgControlComponent>;
  let component: ImgControlComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        ImgControlComponent,
        ImgGalleryComponent,
        ImgViewerComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgControlComponent);
    component = fixture.componentInstance;
  });

  // Правильный выбор картинок и
  // Переключение активного изображения
  it('Should change image in view component, when "clicked" on image of gallery.', () => {
    fixture.detectChanges();

    // компонент с просматриваемой картинкой
    const viewComponent = fixture.debugElement.query(
      By.css(".img-viewer-picture")
    );

    // массив компонентов-изображениями предпросмотра в галлереи
    const selectImg = fixture.debugElement.queryAll(
      By.css(".img-gallery-picture")
    );

    // По очереди перебираем все изображения, генерируем событие click
    for (let i = 0; i < selectImg.length; i++) {
      selectImg[i].triggerEventHandler("click", null);
      fixture.detectChanges();

      // Проверяем правильно ли переданн путь просматриваемого изображения из галлереи
      const actulSRC = selectImg[i].nativeElement.src;
      const expectSRC = viewComponent.nativeElement.src;
      expect(actulSRC).toBe(expectSRC);

      // Проверяем переданный альтернативный тест
      const actulALT = selectImg[i].nativeElement.alt;
      const expectALT = viewComponent.nativeElement.alt;
      expect(actulALT).toBe(expectALT);

      // Проверяем переданный титул
      const actulTITLE = selectImg[i].nativeElement.title;
      const expectTITLE = viewComponent.nativeElement.title;
      expect(actulTITLE).toBe(expectTITLE);
    }
  });
});
