import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component'
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisisesComponent } from './manage-crisises/manage-crisises.component'

console.log(AdminRoutingModule)

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavComponent,
    ManageHeroesComponent,
    ManageCrisisesComponent
  ]
})
export class AdminModule { }
