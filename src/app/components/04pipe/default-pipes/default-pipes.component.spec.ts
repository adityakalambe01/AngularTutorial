import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPipesComponent } from './default-pipes.component';

describe('DefaultPipesComponent', () => {
  let component: DefaultPipesComponent;
  let fixture: ComponentFixture<DefaultPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
