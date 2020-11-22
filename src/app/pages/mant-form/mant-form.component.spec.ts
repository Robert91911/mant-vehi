import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantFormComponent } from './mant-form.component';

describe('MantFormComponent', () => {
  let component: MantFormComponent;
  let fixture: ComponentFixture<MantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
