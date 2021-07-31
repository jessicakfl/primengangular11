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
    private cardService: CardService) {
  }
  widthDirection: number = 100;
  heightDirection: number = 100;
  topDirection: number = 100;
  leftDirection: number = 100;
  widthNote: number = 80;
  heightNote: number = 220;
  topNote: number = 50;
  leftNote: number = 440;

  ifnotepaging: boolean;
  ifdiretionpaging: boolean;
  ifimagepaging:boolean;
  configList: any[];
  imagenote: Imagenote;
  ngOnInit() {
    this.loadConfig();
  }

  loadConfig() {
    this.cardService.getConfigSettings().subscribe((data: any) => {
      this.configList = data;
      this.configList.forEach(config => {
        if (config.id == 5) {
          this.widthDirection = config.nw;
          this.heightDirection = config.nh;
          this.topDirection = config.nt;
          this.leftDirection = config.nl;
          this.ifdiretionpaging = config.ifPaging;
        }
        else if (config.id == 4) {
          this.widthNote = config.nw;
          this.heightNote = config.nh;
          this.topNote = config.nt;
          this.leftNote = config.nl;
          this.ifnotepaging = config.ifPaging;
        }
      });
    })
  }
}
