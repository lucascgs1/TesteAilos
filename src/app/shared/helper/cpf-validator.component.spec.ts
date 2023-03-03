import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfValidatorComponent } from './cpf-validator.component';

describe('CpfValidatorComponent', () => {
  let component: CpfValidatorComponent;
  let fixture: ComponentFixture<CpfValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpfValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
