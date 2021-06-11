import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { Group } from '../model/group';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  readonly ApiUrl = "https://localhost:5001/api/image/";
  readonly ApiUrlConfigSettings = "https://localhost:5001/api/configsettings/";
  readonly ImageUrl = "https://localhost:5001/photos/";
  constructor(private http: HttpClient) { }

  private cards: Card[] = [
    { "flightNumber": "ab22", "origin": "LAX", "destination": "asdf" },
    { "flightNumber": "as32", "origin": "LAX", "destination": "ddd" },
  ];
  private groups: Group[] = [
    { "id": "1", "name": "fadf", "details": "asdfasdfaf", "app": "asdf" },
    { "id": "2", "name": "asdf", "details": "afdasdf", "app": "asdf" },
    { "id": "3", "name": "asdffddf", "details": "sss", "app": "asdf" },
    { "id": "4", "name": "asdadff", "details": "afdadfdfdsdf", "app": "asdf" },
    { "id": "5", "name": "asdffdfgfdf", "details": "ssffs", "app": "asdf" },
  ];
  private width: number;

  public getCards(): Card[] {
    return this.cards;
  }

  public getGroups(): Group[] {
    return this.groups;
  }
  setWidth(w: number) {
    this.width = w;
  }

  getWidth() {
    return this.width;
  }

  getImageList(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl);
  }

  getConfigSettings(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrlConfigSettings);
  }

  setConfigSettings(cs: any) {
    return this.http.put(this.ApiUrlConfigSettings, cs);
  }

}
