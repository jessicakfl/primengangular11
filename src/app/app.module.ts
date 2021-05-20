import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResizableDraggableComponent } from './resizable-draggable/resizable-draggable.component';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    ResizableDraggableComponent
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
