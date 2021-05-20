import { Injectable } from '@angular/core';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cards: Card[] = [
    {"flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR"},
    {"flightNumber" : "FS1201", "origin": "LAX", "destination" : "LHR"},
  ];

  constructor() { }

  // to test with local mock data
  public getCards() : Card[]{
    return this.cards;
  }


}
