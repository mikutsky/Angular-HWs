import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search.box.component';
import { SearchService } from 'src/app/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { By } from '@angular/platform-browser';

describe('SearchBoxComponent', () => {
    let fixture: ComponentFixture<SearchBoxComponent>,
        component: SearchBoxComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientModule,
                AppRoutingModule
            ],
            declarations: [
                SearchBoxComponent
            ],
            providers: [
                SearchService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBoxComponent);
        component = fixture.componentInstance;
    });

    it('Should create an instance.', () => {
        expect(component).toBeTruthy();
    });

    it('Should add class "clicked" and then remove it.', () => {
        const input = fixture.debugElement.query(By.css('input'));

        input.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect((input.nativeElement as HTMLInputElement).classList.contains('clicked')).toBeTruthy();

        input.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(!(input.nativeElement as HTMLInputElement).classList.contains('clicked')).toBeTruthy();
    });
});
