import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
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
    MenubarModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
