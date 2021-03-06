import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart} from '@angular/cdk/drag-drop';

import { ForwardLookComponent } from './myobjects/forwardlook.component';
import { BackordersComponent } from './myobjects/backorders.component';
import { BillOfWorkManagementComponent } from './billofworkmanagement.component';
import { JobSequencingToolKitBuilderComponent } from './myobjects/jobsequencingtoolkitbuilder.component';
import { FomComponent } from './myobjects/fom.component';
import { CmxgSupportComponent } from './myobjects/cmxgsupport.component';
import { PartTrackingComponent } from './myobjects/parttracking.component';








@Component({
  selector: 'tables-dashboard2',
  templateUrl: './tables-dashboard2.component.html',
  styleUrls: ['./tables-dashboard2.component.css']
})
export class TablesDashboard2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var table_ForwardLook  = new ForwardLookComponent();
    console.log("Here is table_ForwardLook:");
    console.log(table_ForwardLook);

    var table_Backorders  = new BackordersComponent();
    console.log("Here is table_Backorders:");
    console.log(table_Backorders);
    
    var table_BillOfWorkManagement  = new BillOfWorkManagementComponent();
    var table_JobSequencingToolKitBuilder  = new JobSequencingToolKitBuilderComponent();
    var table_FOM  = new FomComponent();
    var table_CmxgSupport  = new CmxgSupportComponent();
    var table_PartTracking  = new PartTrackingComponent();

    
    this.firstColumn.push(table_ForwardLook);
    this.firstColumn.push(table_PartTracking);
    this.secondColumn.push(table_JobSequencingToolKitBuilder);
    this.secondColumn.push(table_Backorders);
    //this.firstColumn.push(table_Backorders);
    this.thirdColumn.push(table_BillOfWorkManagement);
    this.thirdColumn.push(table_FOM);
    this.thirdColumn.push(table_CmxgSupport);
  }

  firstColumn = [];
  secondColumn = [];
  thirdColumn = [];
  deleteBox = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('Moved from ' + event.previousContainer.id + '' + event.previousIndex + ' to ' + event.container.id + '' + event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log('Moved from ' + event.previousContainer.id + '' + event.previousIndex + ' to ' + event.container.id + '' + event.currentIndex);
    }
  }


  closeMe(item: any){
    console.log(item);
  }

  public dragging: boolean;

  public handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  public handleClick(event: MouseEvent): void {
    if (this.dragging) {
      this.dragging = false;
      return
    }
    alert('clicked!');
  }


  // closeMe(event: CdkDragDrop<any[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //     console.log('Moved from ' + event.previousContainer.id + '' + event.previousIndex + ' to ' + event.container.id + '' + event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //     console.log(console.log('Moved from ' + event.previousContainer.id + '' + event.previousIndex + ' to ' + event.container.id + '' + event.currentIndex);
  //   }
  // }

}
