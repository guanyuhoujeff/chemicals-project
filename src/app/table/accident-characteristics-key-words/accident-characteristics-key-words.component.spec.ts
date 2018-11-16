import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCharacteristicsKeyWordsComponent } from './accident-characteristics-key-words.component';

describe('AccidentCharacteristicsKeyWordsComponent', () => {
  let component: AccidentCharacteristicsKeyWordsComponent;
  let fixture: ComponentFixture<AccidentCharacteristicsKeyWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentCharacteristicsKeyWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCharacteristicsKeyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
