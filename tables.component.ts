import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CardService } from 'src/app/service/card.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private service: CardService) { }
  widthCard: number = 300;
  heightCard: number = 100;
  topCard: number = -100;
  leftCard: number = 100;
  widthGroup: number = 320;
  heightGroup: number = 220;
  topGroup: number = 50;
  leftGroup: number = 100;
  widthImage: number = 1000;
  heightImage: number = 135;
  topImage: number = 50;
  leftImage: number = 100;
  ifimagepaging: boolean;
  configList: any[];
  ifsubtable = false;

  ngOnInit() {
    this.loadConfig();
  }

  loadConfig() {
    this.service.getConfigSettings().subscribe((data: any) => {
      this.configList = data;
      this.configList.forEach(config => {
        if (config.id == 1) {
          this.widthCard = config.nw;
          this.heightCard = config.nh;
          this.topCard = config.nt;
          this.leftCard = config.nl;
        }
        else if (config.id == 2) {
          this.widthGroup = config.nw;
          this.heightGroup = config.nh;
          this.topGroup = config.nt;
          this.leftGroup = config.nl;
        }
        else if (config.id == 3) {
          this.widthImage = config.nw;
          this.heightImage = config.nh;
          this.topImage = config.nt;
          this.leftImage = config.nl;
          this.ifimagepaging = config.ifpaging;
        }
      });
    })
  }
}

