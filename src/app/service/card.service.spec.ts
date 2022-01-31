import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardService } from './card.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
describe('CardService', () => {
  let service: CardService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([]),FormsModule,
      HttpClientTestingModule], 
      providers: [CardService]
    });
    httpTestingController = TestBed.get(HttpTestingController); 
    service = TestBed.inject(CardService);  
  // });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // afterEach(() => {
  //   //httpTestingController.verify();
  });
      
    
});