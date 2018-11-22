import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharViewComponent } from './new-char-view.component';

describe('NewCharViewComponent', () => {
  let component: NewCharViewComponent;
  let fixture: ComponentFixture<NewCharViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCharViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCharViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
