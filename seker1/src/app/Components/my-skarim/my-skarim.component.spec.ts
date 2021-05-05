import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkarimComponent } from './my-skarim.component';

describe('MySkarimComponent', () => {
  let component: MySkarimComponent;
  let fixture: ComponentFixture<MySkarimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySkarimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
