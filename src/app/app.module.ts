import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrisisCenterComponent } from './pages/crisis-center/crisis-center.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CrisisCenterComponent,
    HeroesComponent,
    NotFoundComponent,
    AdminComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
