import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReservationsService} from "../../shared/services/reservations.service";
import {Reservation} from "../../shared/interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit/*, OnDestroy */{

  reservations: Reservation[];
  reservationSub: Subscription

  constructor(
    private reservationsService: ReservationsService
  ) { }

  ngOnInit(): void {
    this.reservationsService.getReservations().subscribe( reservations => {
      this.reservations = reservations
    })
  }

/*
  //отписываемся от получения бронирований во избежаний утечек памяти
  ngOnDestroy() {
    this.reservationSub.unsubscribe()
  }
*/

}
