import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatarCamposComponent } from './formatar-campos.component';

describe('FormatarCamposComponent', () => {
  let component: FormatarCamposComponent;
  let fixture: ComponentFixture<FormatarCamposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatarCamposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatarCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
