import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminPageComponent} from "./admin-page.component";
// import { LoginPageComponent } from '../login-page/login-page.component';
import { ManageReservationComponent } from './manage-reservation/manage-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [ManageReservationComponent, ReservationListComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin', component: AdminPageComponent, children: [
          {path: '', redirectTo: '/admin/manage-reservation', pathMatch: 'full'},
          {path: 'manage-reservation', component: ManageReservationComponent},
          {path: 'reservation-list', component: ReservationListComponent}

        ]
      }
    ])
  ],
  exports: [
    HeaderComponent
  ]
})
export class AdminModule { }
