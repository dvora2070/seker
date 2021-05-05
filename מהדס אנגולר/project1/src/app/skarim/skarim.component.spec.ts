import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkarimComponent } from './skarim.component';

describe('SkarimComponent', () => {
  let component: SkarimComponent;
  let fixture: ComponentFixture<SkarimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkarimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
