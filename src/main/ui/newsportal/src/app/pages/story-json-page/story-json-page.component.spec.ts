import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryJsonPageComponent } from './story-json-page.component';

describe('StoryJsonPageComponent', () => {
    let component:StoryJsonPageComponent;
    let fixture:ComponentFixture<StoryJsonPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [StoryJsonPageComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryJsonPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
