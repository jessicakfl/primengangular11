import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardService } from '../service/card.service';

import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(async(() => {let cardServeSpyObj = jasmine.createSpyObj('cardService', ['']);
 TestBed.configureTestingModule({
  imports: [
  HttpClientTestingModule], 
  declarations:[TablesComponent],
  providers: [{provide: CardService,useValue:cardServeSpyObj}] 
}).compileComponents();
cardServeSpyObj = TestBed.get(CardService);
  }));
  beforeEach(()=>{
    fixture = TestBed.createComponent(TablesComponent);

  });

  it('would create', () => {
    expect(component).toBeTruthy();
  });
});
