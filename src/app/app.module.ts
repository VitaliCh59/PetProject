import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewReservationComponent } from './home/new-reservation/new-reservation.component';
import { MyReservationsComponent } from './home/my-reservations/my-reservations.component';
import { NewsPageComponent } from './home/news-page/news-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HeaderComponent } from './home/components/header/header.component';
import { DashboardComponent } from './home/components/dashboard/dashboard.component';
import {LoginPageComponent} from "./login-page/login-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AdminModule} from "./admin-page/admin.module";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {AuthInterceptor} from "./shared/auth.interceptor";
import {SearchPipe} from "./admin-page/admin-shared/search.pipe";

const  INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPageComponent,
    NewReservationComponent,
    MyReservationsComponent,
    NewsPageComponent,
    HeaderComponent,
    DashboardComponent,
    LoginPageComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    AdminModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
