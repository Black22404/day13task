import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformexpComponent } from './reactiveformexp.component';

describe('ReactiveformexpComponent', () => {
  let component: ReactiveformexpComponent;
  let fixture: ComponentFixture<ReactiveformexpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveformexpComponent]
    });
    fixture = TestBed.createComponent(ReactiveformexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
