import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewReservationComponent } from './home/new-reservation/new-reservation.component';
import { MyReservationsComponent } from './home/my-reservations/my-reservations.component';
import { NewsPageComponent } from './home/news-page/news-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPageComponent,
    NewReservationComponent,
    MyReservationsComponent,
    NewsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
