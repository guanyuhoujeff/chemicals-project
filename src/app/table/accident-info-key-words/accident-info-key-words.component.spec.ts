import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentInfoKeyWordsComponent } from './accident-info-key-words.component';

describe('AccidentInfoKeyWordsComponent', () => {
  let component: AccidentInfoKeyWordsComponent;
  let fixture: ComponentFixture<AccidentInfoKeyWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentInfoKeyWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentInfoKeyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
