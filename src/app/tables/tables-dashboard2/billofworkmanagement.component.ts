import { Component, OnInit } from '@angular/core';

export interface BillOfWorkManagement {
  BillOfWorkManagement: string;
}

const TABLE_DATA: BillOfWorkManagement[] = [
  {BillOfWorkManagement: 'Production Control Board (ePCB)'},
  {BillOfWorkManagement: 'BOW Worm Chart'},
  {BillOfWorkManagement: 'Tactical Schedule'},
  {BillOfWorkManagement: 'Full Schedule'},
  {BillOfWorkManagement: 'Materiel Schedule'},
  {BillOfWorkManagement: 'Group Information'},
  {BillOfWorkManagement: 'Mechanic Assignment'},
  {BillOfWorkManagement: 'Late Finished Hours Chart'}
]

@Component({
  template: '',
})


export class BillOfWorkManagementComponent implements OnInit {

  displayedColumns: string[] = ['BillOfWorkManagement'];
  dataSource = TABLE_DATA;
  tableTitle = 'Bill of Work Management'

  constructor() { }

  ngOnInit(): void {  }
  
}
