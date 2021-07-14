import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofticketsComponent } from './tableoftickets.component';

describe('TableofticketsComponent', () => {
  let component: TableofticketsComponent;
  let fixture: ComponentFixture<TableofticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableofticketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableofticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
