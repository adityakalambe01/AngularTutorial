import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfIfelseElseifComponent } from './if-ifelse-elseif.component';

describe('IfIfelseElseifComponent', () => {
  let component: IfIfelseElseifComponent;
  let fixture: ComponentFixture<IfIfelseElseifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfIfelseElseifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfIfelseElseifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
