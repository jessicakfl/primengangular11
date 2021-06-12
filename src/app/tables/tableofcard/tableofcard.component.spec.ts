import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfCardComponent } from './tableofcard.component';

describe('primengangular11', () => {
  let component: TableOfCardComponent;
  let fixture: ComponentFixture<TableOfCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
