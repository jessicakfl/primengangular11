import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: '123', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Litllium', weight: 9.0122, symbol: 'Be' }
];
const ELEMENT_DATA3: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
];
const ELEMENT_DATA4: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: '123', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Litllium', weight: 9.0122, symbol: 'Be' }
];
@Component({
  selector: 'app-tablesgroup',
  templateUrl: './tablesgroup.component.html',
  styleUrls: ['./tablesgroup.component.css']
})
export class TablesgroupComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'drag tables';
  dataSource = ELEMENT_DATA;
  dataSource2 = [];
  dataSource3 = ELEMENT_DATA3;
  dataSource4 = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

}
