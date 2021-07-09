import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnClick= function () {
    this.router.navigateByUrl('/dashboard');
  };  


  firstColumn = [
    'Get to work',
    'Go home'
  ];

  secondColumn = [
    'Get up',
    'Brush teeth',
    'Take a shower'
  ];

  thirdColumn = [
    'Check e-mail',
    'Pick up groceries',
    'Walk dog',
    'Watch TV',
    'Work',
    'Fall asleep'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
