import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ManageHeroesComponent } from "./manage-heroes/manage-heroes.component";
import { ManageCrisisesComponent } from './manage-crisises/manage-crisises.component'

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'manage-heroes',
        component: ManageHeroesComponent
      },
      {
        path: 'manage-crisises',
        component: ManageCrisisesComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export class AdminRoutingModule { }
