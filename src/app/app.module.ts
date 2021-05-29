import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import { TableOfCardComponent } from './tables/tableofcard/tableofcard.component';
import { TableModule } from 'primeng/table';
import { TableofgroupComponent } from './tables/tableofgroup/tableofgroup.component';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './app-routing.module';
import { TablesComponent } from './tables/tables.component';
import { HttpClientModule } from '@angular/common/http';
import { TableOfImageComponent } from './tables/table-of-image/table-of-image.component';
@NgModule({
  declarations: [
    AppComponent,
    TableOfCardComponent,
    TableofgroupComponent,
    HelpComponent,
    TablesComponent,
    TableOfImageComponent,
    TableOfImageComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    MenubarModule,
    TabMenuModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
