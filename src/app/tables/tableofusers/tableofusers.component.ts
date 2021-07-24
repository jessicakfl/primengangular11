import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/model/group';
import { Image } from 'src/app/model/image';
import { CardService } from 'src/app/service/card.service';
const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2
}
@Component({
  selector: 'app-tableofusers',
  templateUrl: './tableofusers.component.html',
  styleUrls: ['./tableofusers.component.scss']
})
export class TableofusersComponent implements OnInit {
  @ViewChild("box") public box: ElementRef;
  private boxPosition: { left: number, top: number };
  private containerPos: { left: number, top: number, right: number, bottom: number };
  public mouse: { x: number, y: number }
  public status: Status = Status.OFF;
  private mouseClick: { x: number, y: number, left: number, top: number }
  constructor(private cardService: CardService) { }
  UserList: Group[] = [];
  @Input('width') public width: number;
  @Input('left') public left: number;
  @Input('top') public top: number;
  @Input('height') public height: number;
  ngOnInit(): void {
    this.refreshUsersList();
  }
  refreshUsersList() {
    this.UserList = this.cardService.getUsers();
  }
  title ="Table of Users";
  ngAfterViewInit() {
    this.loadBox();
    this.loadContainer();
  }

  private loadBox() {
    const { left, top } = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = { left, top };
  }

  private loadContainer() {
    const left = this.boxPosition.left - this.left;
    const top = this.boxPosition.top - this.top;
    const right = left + 1000;
    const bottom = top + 600;
    this.containerPos = { left, top, right, bottom };
  }

  setStatus(event: MouseEvent, status: number) {
    if (status === 1) event.stopPropagation();
    else if (status === 2) this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top };
    else this.loadBox();
    this.status = status;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX, y: event.clientY };
  }


  private resizeCondMeet() {
    return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
  }
}
