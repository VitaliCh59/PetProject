import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminPageComponent} from "./admin-page.component";
// import { LoginPageComponent } from '../login-page/login-page.component';
import { ManageReservationComponent } from './manage-reservation/manage-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';



@NgModule({
  declarations: [/*LoginPageComponent,*/ ManageReservationComponent, ReservationListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminPageComponent, children: [
          {path: '', redirectTo: '/login', pathMatch: 'full'},
          // {path: 'login', component: LoginPageComponent},
          {path: 'manage-reservation', component: ManageReservationComponent},
          {path: 'reservation-list', component: ReservationListComponent}

        ]
      }
    ])
  ],
  exports: []
})
export class AdminModule { }
