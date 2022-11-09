/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BloqueoDiaHoraComponent } from './Bloqueo-Dia-Hora.component';

describe('BloqueoDiaHoraComponent', () => {
  let component: BloqueoDiaHoraComponent;
  let fixture: ComponentFixture<BloqueoDiaHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueoDiaHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueoDiaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
