import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalsKeyWordsComponent } from './chemicals-key-words.component';

describe('ChemicalsKeyWordsComponent', () => {
  let component: ChemicalsKeyWordsComponent;
  let fixture: ComponentFixture<ChemicalsKeyWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalsKeyWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalsKeyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
