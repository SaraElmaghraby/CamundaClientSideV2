/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetGroupTasksComponent } from './get-groupTasks.component';

describe('GetGroupTasksComponent', () => {
  let component: GetGroupTasksComponent;
  let fixture: ComponentFixture<GetGroupTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetGroupTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGroupTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
