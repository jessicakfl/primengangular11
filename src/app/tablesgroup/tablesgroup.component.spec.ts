import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesgroupComponent } from './tablesgroup.component';

describe('TablesgroupComponent', () => {
  let component: TablesgroupComponent;
  let fixture: ComponentFixture<TablesgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
