import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CardService } from '../service/card.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
];
const ELEMENT_DATA2: PeriodicElement[] = [
  { position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: '123', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Litllium', weight: 9.0122, symbol: 'Be' }
];
const ELEMENT_DATA3: PeriodicElement[] = [
  { position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
];
const ELEMENT_DATA4: PeriodicElement[] = [
  { position: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: '123', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Litllium', weight: 9.0122, symbol: 'Be' }
];
@Component({
  selector: 'app-tablesgroup',
  templateUrl: './tablesgroup.component.html',
  styleUrls: ['./tablesgroup.component.css']
})
export class TablesgroupComponent implements OnInit {
  constructor(private service: CardService) { }
  ngOnInit(): void {
    this.loadConfig();
  }
  ifimagepaging: boolean;
  title = 'drag tables';
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
  configList: any[];
  dataSource3 = ELEMENT_DATA3;
  dataSource4 = [];
  displayedColumns: string[] = ['position', 'name'];
  widthImage: number = 500;
  heightImage: number = 135;
  topImage: number = 0;
  leftImage: number = 0;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
        // console.log("@@"+event.previousIndex);
        // console.log("$$"+event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
  loadConfig() {
    this.service.getConfigSettings().subscribe((data: any) => {
      this.configList = data;
      this.configList.forEach(config => {
        if (config.id == 3) {
          this.ifimagepaging = config.ifpaging;
        }
      });
    })
  }
}
