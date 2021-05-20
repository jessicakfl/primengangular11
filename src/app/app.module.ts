import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import { TableOfCardComponent } from './/tableofcard/tableofcard.component';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    TableOfCardComponent
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
