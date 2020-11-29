import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGenerateKeyComponent } from './covid-generate-key.component';

describe('CovidGenerateKeyComponent', () => {
  let component: CovidGenerateKeyComponent;
  let fixture: ComponentFixture<CovidGenerateKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidGenerateKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGenerateKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
