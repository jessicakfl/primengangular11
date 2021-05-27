import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofgroupComponent } from './tableofgroup.component';

describe('TableofgroupComponent', () => {
  let component: TableofgroupComponent;
  let fixture: ComponentFixture<TableofgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableofgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableofgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
