import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytable1Component } from './mytable1.component';

describe('Mytable1Component', () => {
  let component: Mytable1Component;
  let fixture: ComponentFixture<Mytable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mytable1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mytable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
