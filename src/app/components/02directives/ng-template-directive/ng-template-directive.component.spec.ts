import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateDirectiveComponent } from './ng-template-directive.component';

describe('NgTemplateDirectiveComponent', () => {
  let component: NgTemplateDirectiveComponent;
  let fixture: ComponentFixture<NgTemplateDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
