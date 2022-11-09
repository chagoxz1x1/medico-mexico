/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitasWeekComponent } from './Citas-week.component';

describe('CitasWeekComponent', () => {
  let component: CitasWeekComponent;
  let fixture: ComponentFixture<CitasWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
