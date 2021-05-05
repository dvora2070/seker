import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSekerComponent } from './add-seker.component';

describe('AddSekerComponent', () => {
  let component: AddSekerComponent;
  let fixture: ComponentFixture<AddSekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
