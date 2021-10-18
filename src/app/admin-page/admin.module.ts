import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminPageComponent} from "./admin-page.component";
import { ManageReservationComponent } from './manage-reservation/manage-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./admin-shared/search.pipe";



@NgModule({
  declarations: [
    ManageReservationComponent,
    ReservationListComponent,
    SearchPipe,
    HeaderComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin', component: AdminPageComponent, children: [
          {path: '', redirectTo: '/admin/reservation-list', pathMatch: 'full'},
          {path: 'reservation-list', component: ReservationListComponent},
          {path: 'manage-reservation/:id', component: ManageReservationComponent}
        ]
      }
    ]),
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class AdminModule { }
