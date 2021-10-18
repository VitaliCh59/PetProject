import {Component, OnDestroy, OnInit} from '@angular/core';
import {Reservation} from "../../shared/interfaces";
import {Observable, Subscription} from "rxjs";
import {ReservationsService} from "../../shared/services/reservations.service";

@Component({
  selector: 'reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit, OnDestroy {

  reservationTime = [
    { id: 1, name: "8:00-10:00" },
    { id: 2, name: "10:00-12:00" },
    { id: 3, name: "12:00-15:00" },
    { id: 4, name: "15:00-17:00" },
    { id: 5, name: "17:00-19:00" },
    { id: 6, name: "19:00-21:00" },
  ];

  reservations: Reservation[] = [];
  reservationSub: Subscription;
  deleteSub: Subscription
  searchStr = '';

  constructor(
    private reservationsService: ReservationsService
  ) { }

  ngOnInit(): void {
    this.reservationsService.getReservations().subscribe( reservations => {
      this.reservations = reservations
    })
  }


  remove(id: string) {
    this.deleteSub = this.reservationsService.remove(id).subscribe( () => {
    this.reservations = this.reservations.filter( reservation => reservation.id !== id)
    })
  }

  // отписываемся от получения бронирований во избежаний утечек памяти
  ngOnDestroy() {
     if(this.reservationSub) {
       this.reservationSub.unsubscribe()
     }

     if (this.deleteSub) {
       this.deleteSub.unsubscribe()
     }
  }
}
