import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSwithchComponent } from './for-swithch.component';

describe('ForSwithchComponent', () => {
  let component: ForSwithchComponent;
  let fixture: ComponentFixture<ForSwithchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForSwithchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSwithchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
