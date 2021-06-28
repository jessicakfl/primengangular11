import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagenote } from 'src/app/model/imagenote';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-subtables',
  templateUrl: './subtables.component.html',
  styleUrls: ['./subtables.component.scss']
})
export class SubtablesComponent implements OnInit {

  constructor(private _Activedroute: ActivatedRoute,
    private _router: Router,
    private service: CardService) {
  }
  widthCard: number = 300;
  heightCard: number = 100;
  topCard: number = -100;
  leftCard: number = 100;
  widthGroup: number = 320;
  heightGroup: number = 220;
  topGroup: number = 50;
  leftGroup: number = 440;
  widthImage: number = 1000;
  heightImage: number = 135;
  topImage: number = 50;
  leftImage: number = 100;
  configList: any[];
  ifsubtable = false;
  imagenote: Imagenote;
  ngOnInit() {

  }
}
