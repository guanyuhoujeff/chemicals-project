import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkedContentComponent } from './marked-content.component';

describe('MarkedContentComponent', () => {
  let component: MarkedContentComponent;
  let fixture: ComponentFixture<MarkedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
