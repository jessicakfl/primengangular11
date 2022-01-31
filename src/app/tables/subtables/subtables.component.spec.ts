import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardService } from 'src/app/service/card.service';
import { SubtablesComponent } from './subtables.component';

describe('SubtablesComponent', () => {
  let component: SubtablesComponent;
  let fixture: ComponentFixture<SubtablesComponent>;

  beforeEach(async(() => {let cardServeSpyObj = jasmine.createSpyObj('cardService', ['']);
 TestBed.configureTestingModule({
  imports: [
  HttpClientTestingModule], 
  declarations:[SubtablesComponent],
  providers: [{provide: CardService,useValue:cardServeSpyObj}] 
}).compileComponents();
cardServeSpyObj = TestBed.get(CardService);
  }));
  beforeEach(()=>{
    fixture = TestBed.createComponent(SubtablesComponent);

  });

  it('would create', () => {
    expect(component).toBeTruthy();
  });
});
