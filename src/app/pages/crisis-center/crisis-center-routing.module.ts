import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { CrisisCenterComponent } from './crisis-center.component'
import { CrisisListComponent } from './crisis-list/crisis-list.component'
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component'

const crisisRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent

      }
    ]
  },
  {
    path: ':id',
    component: CrisisDetailComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(crisisRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CrisisCenterRoutingModule { }
