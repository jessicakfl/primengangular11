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
    {"id" : "1", "name": "fadf", "details" : "asdfasdfaf", "app": "asdf"},
    {"id" : "2", "name": "asdf", "details" : "afdasdf", "app": "asdf"},
    {"id" : "3", "name": "asdffddf", "details" : "sss", "app": "asdf"},
  ];
  private width;

  constructor() { }

  public getCards() : Card[]{
    return this.cards;
  }

  public getGroups() : Card[]{
    return this.groups;
  }
  setWidth(w:number){
    this.width=w;
  }
  
  getWidth(){
    return this.width;
  }
}
