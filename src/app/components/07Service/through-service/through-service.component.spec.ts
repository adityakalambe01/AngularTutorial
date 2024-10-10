import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughServiceComponent } from './through-service.component';

describe('ThroughServiceComponent', () => {
  let component: ThroughServiceComponent;
  let fixture: ComponentFixture<ThroughServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThroughServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThroughServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
