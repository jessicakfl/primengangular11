import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { TablesComponent } from './tables/tables.component';
import { SiteadminComponent } from './siteadmin/siteadmin.component';
const routes: Routes = [
  {path:'help', component: HelpComponent},
  {path:'table', component:TablesComponent},
  {path:'siteadmin', component:SiteadminComponent},
  {path:'', component:TablesComponent}
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
