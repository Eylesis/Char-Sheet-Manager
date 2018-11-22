import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlistViewComponent } from './charlist-view.component';

describe('CharlistViewComponent', () => {
  let component: CharlistViewComponent;
  let fixture: ComponentFixture<CharlistViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharlistViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharlistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
