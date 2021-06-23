import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/model/image';
import { MenuItem } from 'primeng/api';
import { from } from 'rxjs';

@Component({
  selector: 'app-siteadmin',
  templateUrl: './siteadmin.component.html',
  styleUrls: ['./siteadmin.component.scss']
})
export class SiteadminComponent implements OnInit {
  checked: string = "off";
  constructor() { }
  ImageList: Image = [];
  ngOnInit(): void {
  }
  
}
