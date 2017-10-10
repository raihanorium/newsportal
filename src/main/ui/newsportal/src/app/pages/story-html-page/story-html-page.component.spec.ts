import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryHtmlPageComponent } from './story-html-page.component';

describe('StoryHtmlPageComponent', () => {
    let component:StoryHtmlPageComponent;
    let fixture:ComponentFixture<StoryHtmlPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [StoryHtmlPageComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryHtmlPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
