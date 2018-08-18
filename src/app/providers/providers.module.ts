import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroService } from './hero.service'
import { CrisisService } from './crisis.service'
import { AuthService } from './auth.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    HeroService,
    CrisisService,
    AuthService
  ]
})
export class ProvidersModule { }
