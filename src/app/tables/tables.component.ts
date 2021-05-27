import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  widthP:number=300;
  width:number=0;
  ngOnInit() {
  }
    getWidth(message: number) {
        this.width = message;
        console.log("@"+this.width);
      }
}

