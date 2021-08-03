import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/model/image';
import { MenuItem } from 'primeng/api';
import { from } from 'rxjs';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-siteadmin',
  templateUrl: './siteadmin.component.html',
  styleUrls: ['./siteadmin.component.scss']
})

export class SiteadminComponent implements OnInit {
  public ifimagepaging: boolean;
  ifdirectionpaging: boolean;
  ifnotepaging: boolean;
  msg: String = "";

  constructor(private cardService: CardService) { }
  widthDirection: number = 300;
  heightDirection: number = 100;
  topDirection: number = -100;
  leftDirection: number = 100;
  widthNote: number = 320;
  heightNote: number = 220;
  topNote: number = 50;
  leftNote: number = 100;
  widthImage: number = 1000;
  heightImage: number = 135;
  topImage: number = 50;
  leftImage: number = 100;
  
  configList: any[];
  ifsubtable = false;
  ngOnInit(): void {
    this.loadConfig();
  }

  onSaveIfImagePaging(val: boolean) {
    this.ifimagepaging = val;
    var cs = {
      id: 3, nw: this.widthImage.toFixed(), nh: this.heightImage.toFixed(),
      nt: this.topImage, nl: this.leftImage, ifpaging: this.ifimagepaging
    };
    this.cardService.setConfigSettings(cs).subscribe(res => {
      this.msg = res.toString();
    });
  }

  onSaveIfImageDirectionPaging(val: boolean) {
    this.ifdirectionpaging = val;
    var cs = {
      id: 5, nw: this.widthDirection.toFixed(), nh: this.heightDirection.toFixed(),
      nt: this.topDirection, nl: this.leftDirection, ifpaging: this.ifdirectionpaging
    };
    this.cardService.setConfigSettings(cs).subscribe(res => {
      this.msg = res.toString();
    });;
  }

  onSaveIfImageNotePaging(val: boolean) {
    this.ifnotepaging = val;
    var cs = {
      id: 4, nw: this.widthNote.toFixed(), nh: this.heightNote.toFixed(),
      nt: this.topNote, nl: this.leftNote, ifpaging: this.ifnotepaging
    };
    this.cardService.setConfigSettings(cs).subscribe(res => {
      this.msg = res.toString();
    });;
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
          this.ifdirectionpaging = config.ifpaging;
        }
        else if (config.id == 4) {
          this.widthNote = config.nw;
          this.heightNote = config.nh;
          this.topNote = config.nt;
          this.leftNote = config.nl;
          this.ifnotepaging = config.ifpaging;
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
