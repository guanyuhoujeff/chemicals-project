import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFileComponent } from './online-file.component';

describe('OnlineFileComponent', () => {
  let component: OnlineFileComponent;
  let fixture: ComponentFixture<OnlineFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
