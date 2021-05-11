import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSekerComponent } from './view-seker.component';

describe('ViewSekerComponent', () => {
  let component: ViewSekerComponent;
  let fixture: ComponentFixture<ViewSekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
