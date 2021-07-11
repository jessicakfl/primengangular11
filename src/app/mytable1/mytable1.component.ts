import { Component, OnInit } from '@angular/core';
import { Row1 } from './row1';

@Component({
  selector: 'mytable1',
  templateUrl: './mytable1.component.html',
  styleUrls: ['./mytable1.component.css']
})
export class Mytable1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customers: Row1[] = [
    {customerNo: 1, firstName: 'John', lastName: 'Smith', address: '2345 Robb St', city: 'Baltimore', zipCode: 21206 , county : 'Worcester', state: 'Maryland', country: 'US'},
    {customerNo: 2, firstName: 'Gary', lastName: 'Lindon', address: '3323 Carroll Pkwy', city: 'Frederick', zipCode: 21703, county : 'Frederick', state: 'Maryland', country: 'US'},
    {customerNo: 3, firstName: 'Dianne', lastName: 'Santos', address: '150 Venable St 203', city: 'Richmond', zipCode: 23848, county : 'Richmond', state: 'Virginia', country: 'US'},
    {customerNo: 4, firstName: 'Aaron', lastName: 'Calhoun', address: '786 N Main St 304', city: 'Concord', zipCode: 17217, county : 'Merrimack', state: 'New Hampshire', country: 'US'},
    {customerNo: 5, firstName: 'Tobias', lastName: 'Meyer', address: '231 Olive St 11', city: 'Philadelphia', zipCode: 19109, county : 'Philadelphia', state: 'Pennsylvania', country: 'US'},
    {customerNo: 6, firstName: 'Thomas', lastName: 'Sanders', address: '231 Olive St 11', city: 'Philadelphia', zipCode: 19125, county : 'Philadelphia', state: 'Pennsylvania', country: 'US'},
  ]

}
