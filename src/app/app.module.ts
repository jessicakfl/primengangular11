import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableOfCardComponent } from './tables/tableofcard/tableofcard.component';
import { TableModule } from 'primeng/table';
import { TableofgroupComponent } from './tables/tableofgroup/tableofgroup.component';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './app-routing.module';
import { TablesComponent } from './tables/tables.component';
import { HttpClientModule } from '@angular/common/http';
import { TableOfImageComponent } from './tables/table-of-image/table-of-image.component';
import { SiteadminComponent } from './siteadmin/siteadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagedirectionsComponent } from './tables/imagedirections/imagedirections.component';
import { ImagenotesComponent } from './tables/imagenotes/imagenotes.component';
import { SubtablesComponent } from './tables/subtables/subtables.component';
import { MytableComponent } from './mytable/mytable.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TablesgroupComponent } from './tablesgroup/tablesgroup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableofticketsComponent } from './tables/tableoftickets/tableoftickets.component';
import { TableofusersComponent } from './tables/tableofusers/tableofusers.component';
import { AppinfoComponent } from './appinfo/appinfo.component';
@NgModule({
  declarations: [
    AppComponent,
    TableOfCardComponent,
    TableofgroupComponent,
    HelpComponent,
    TablesComponent,
    TableOfImageComponent,
    TableOfImageComponent,
    SiteadminComponent,
    ImagedirectionsComponent,
    ImagenotesComponent,
    SubtablesComponent,
    MytableComponent,
    TablesgroupComponent,
    DashboardComponent,
    TableofticketsComponent,
    TableofusersComponent,
    AppinfoComponent,
  ],
  imports: [
    BrowserModule,
    TableModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MenubarModule,
    TabMenuModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
