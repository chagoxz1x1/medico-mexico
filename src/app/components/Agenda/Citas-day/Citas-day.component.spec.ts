/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitasDayComponent } from './Citas-day.component';

describe('CitasDayComponent', () => {
  let component: CitasDayComponent;
  let fixture: ComponentFixture<CitasDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
