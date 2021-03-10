/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RejecttaskComponent } from './rejecttask.component';

describe('RejecttaskComponent', () => {
  let component: RejecttaskComponent;
  let fixture: ComponentFixture<RejecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
