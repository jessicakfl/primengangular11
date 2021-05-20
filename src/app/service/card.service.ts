import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { Group } from '../model/group';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cards: Card[] = [
    {"flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR"},
    {"flightNumber" : "FS1201", "origin": "LAX", "destination" : "LHR"},
  ];
  private groups: Group[] = [
    {"id" : "1", "name": "fadf", "details" : "asdfasdfaf"},
    {"id" : "2", "name": "asdf", "details" : "afdasdf"},
  ];

  constructor() { }

  public getCards() : Card[]{
    return this.cards;
  }

  public getGroups() : Card[]{
    return this.groups;
  }
}
