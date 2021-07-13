import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { TablesComponent } from './tables/tables.component';
import { SiteadminComponent } from './siteadmin/siteadmin.component';
import { ImagedirectionsComponent } from './tables/imagedirections/imagedirections.component';
import { ImagenotesComponent } from './tables/imagenotes/imagenotes.component';
import { SubtablesComponent } from './tables/subtables/subtables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesgroupComponent } from './tablesgroup/tablesgroup.component';
const routes: Routes = [
  {path:'help', component: HelpComponent},
  {path:'table', component:TablesComponent},
  {path:'siteadmin', component:SiteadminComponent},
  {path:'imagedirections', component:ImagedirectionsComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'tablesgroup', component: TablesgroupComponent },
  {path:'imagenotes', component:ImagenotesComponent},
  {path:'table/subtables/:id', component:SubtablesComponent},
  {path:'', component:TablesComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
