import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactangleComponent } from './reactangle.component';

describe('ReactangleComponent', () => {
  let component: ReactangleComponent;
  let fixture: ComponentFixture<ReactangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
