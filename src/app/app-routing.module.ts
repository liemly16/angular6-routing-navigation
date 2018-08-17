import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component'
import { CrisisCenterComponent } from './pages/crisis-center/crisis-center.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'crisis-center',
    component: CrisisCenterComponent
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
