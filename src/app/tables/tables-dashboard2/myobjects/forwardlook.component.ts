import { Component, OnInit } from '@angular/core';

export interface ForwardLook {
  ForwardLook: string;
  Qty: number;
  id:number;
}

const FORWARDLOOK_DATA: ForwardLook[] = [
  {ForwardLook: 'Operations Opening in 10 days:', Qty: 0, id: 1},
  {ForwardLook: 'Operations Opening in 30 days:', Qty: 0, id: 2},
]


@Component({
  template: '',
})


export class ForwardLookComponent implements OnInit {

  displayedColumns: string[] = ['ForwardLook', 'Qty'];
  dataSource = FORWARDLOOK_DATA;
  tableTitle = 'Forward Look'

  constructor() { }

  ngOnInit(): void {  }
  
}
