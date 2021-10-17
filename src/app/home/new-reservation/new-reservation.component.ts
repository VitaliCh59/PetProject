import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../../shared/interfaces";
import {ReservationsService} from "../../shared/services/reservations.service";

@Component({
  selector: 'new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {

  reservationTime = [
    { id: 1, time: "8:00-10:00" },
    { id: 2, time: "10:00-12:00" },
    { id: 3, time: "12:00-15:00" },
    { id: 4, time: "15:00-17:00" },
    { id: 5, time: "17:00-19:00" },
    { id: 6, time: "19:00-21:00" },
  ];

  reservTable = [
    { id: 1, table: "1" },
    { id: 2, table: "2" },
    { id: 3, table: "3" },
    { id: 4, table: "4" },
    { id: 5, table: "5" },
    { id: 6, table: "6" },
  ];

  personValue = [
    { id: 1, value: "1" },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
    { id: 4, value: "4" },
    { id: 5, value: "5" },
    { id: 6, value: "6" },
  ];

  form: FormGroup;

  constructor(private reservation: ReservationsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      calendar: new FormControl(null, [Validators.required]),
      reservationTime: new FormControl(null, [Validators.required]),
      reservationTable: new FormControl(null, [Validators.required]),
      guests: new FormControl(null, [Validators.required]),
    })

    let nowDay = Date();
    console.log(nowDay)
  }

  submit() {
    if (this.form.invalid) {
      return
    }


    const reservation: Reservation = {
      calendar: this.form.value.calendar,
      reservationTime: this.form.value.reservationTime,
      reservationTable: this.form.value.reservationTable,
      guests: this.form.value.guests
    }

    this.reservation.createReservation(reservation).subscribe( ()=> {
      this.form.reset()
    })
  }
}
