/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OperadoresComponent } from './Operadores.component';

describe('OperadoresComponent', () => {
  let component: OperadoresComponent;
  let fixture: ComponentFixture<OperadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
