import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirApiRestComponent } from './consumir-api-rest.component';

describe('ConsumirApiRestComponent', () => {
  let component: ConsumirApiRestComponent;
  let fixture: ComponentFixture<ConsumirApiRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumirApiRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumirApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
