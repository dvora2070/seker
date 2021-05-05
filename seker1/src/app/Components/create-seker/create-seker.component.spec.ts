import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSekerComponent } from './create-seker.component';

describe('CreateSekerComponent', () => {
  let component: CreateSekerComponent;
  let fixture: ComponentFixture<CreateSekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
