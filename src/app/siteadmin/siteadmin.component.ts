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
  ifimagepaging = true;
  msg:String="";
  constructor(private cardService: CardService) { }
  widthImage: number = 1000;
  heightImage: number = 135;
  topImage: number = 50;
  leftImage: number = 100;
  configList: any[];
  ifsubtable=false;
  ngOnInit(): void {
    this.loadConfig();
  }

  onSaveIfImagePaging(val: boolean) {
    console.log("##" + val);
    this.ifimagepaging = val;
    var cs = { id: 3, nw: this.widthImage.toFixed(), nh: this.heightImage.toFixed(), 
      nt: this.topImage, nl: this.leftImage , ifpaging:this.ifimagepaging};
    this.cardService.setConfigSettings(cs).subscribe(res => {
      this.msg = res.toString();
      console.log("$$"+this.msg);
    });;
  }

  loadConfig() {
    this.cardService.getConfigSettings().subscribe((data: any) => {
      this.configList = data;
      this.configList.forEach(config => {
         if (config.id == 3) {
          this.widthImage = config.nw;
          this.heightImage = config.nh;
          this.topImage = config.nt;
          this.leftImage = config.nl;
        }
      });
    })
  }
}
