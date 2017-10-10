import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryXmlPageComponent } from './story-xml-page.component';

describe('StoryXmlPageComponent', () => {
    let component:StoryXmlPageComponent;
    let fixture:ComponentFixture<StoryXmlPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [StoryXmlPageComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryXmlPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
