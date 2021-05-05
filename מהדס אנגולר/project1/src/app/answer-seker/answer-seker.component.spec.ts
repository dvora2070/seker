import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSekerComponent } from './answer-seker.component';

describe('AnswerSekerComponent', () => {
  let component: AnswerSekerComponent;
  let fixture: ComponentFixture<AnswerSekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerSekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
