import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempdrivneformComponent } from './tempdrivneform.component';

describe('TempdrivneformComponent', () => {
  let component: TempdrivneformComponent;
  let fixture: ComponentFixture<TempdrivneformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempdrivneformComponent]
    });
    fixture = TestBed.createComponent(TempdrivneformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
