import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module'
import { CrisisCenterComponent } from './crisis-center.component'

@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule,
    FormsModule
  ],
  declarations: [
    CrisisDetailComponent,
    CrisisListComponent,
    CrisisCenterComponent
  ]
})
export class CrisisCenterModule { }
