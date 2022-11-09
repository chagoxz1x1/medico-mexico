/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefinirCitasComponent } from './Definir-Citas.component';

describe('DefinirCitasComponent', () => {
  let component: DefinirCitasComponent;
  let fixture: ComponentFixture<DefinirCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinirCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinirCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
