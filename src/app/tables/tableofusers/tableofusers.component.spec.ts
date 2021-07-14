import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofusersComponent } from './tableofusers.component';

describe('TableofusersComponent', () => {
  let component: TableofusersComponent;
  let fixture: ComponentFixture<TableofusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableofusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableofusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
