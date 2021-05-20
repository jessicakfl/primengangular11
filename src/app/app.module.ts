import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { ResizableDraggableComponent } from './resizable-draggable/resizable-draggable.component';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    ResizableDraggableComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
