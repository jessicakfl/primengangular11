import { Component, OnInit } from '@angular/core';
import { Configsettings } from '../model/configsettings';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-appinfo',
  templateUrl: './appinfo.component.html',
  styleUrls: ['./appinfo.component.scss']
})
export class AppinfoComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getConfigSettings().subscribe((data: any) => {
      this.configList = data;
      this.configList.forEach(config => {
        if (config.id == 5) {
          this.ticketnumber = config.nw;
          this.status = config.name;
          this.start=config.nl
        }
      });
    })
  }
 ticketnumber:String;
 start:number;
 status:String;
public configList:any[];

}
