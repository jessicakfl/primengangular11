import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfImageComponent } from './table-of-image.component';

describe('TableOfImageComponent', () => {
  let component: TableOfImageComponent;
  let fixture: ComponentFixture<TableOfImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
