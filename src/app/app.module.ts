import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import { TableOfCardComponent } from './/tableofcard/tableofcard.component';
import { TableModule } from 'primeng/table';
import { TableofgroupComponent } from './tableofgroup/tableofgroup.component';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    TableOfCardComponent,
    TableofgroupComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    MenubarModule,
    TabMenuModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
