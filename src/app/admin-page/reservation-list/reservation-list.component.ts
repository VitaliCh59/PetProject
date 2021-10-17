import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservationTime = [
    { id: 1, name: "8:00-10:00" },
    { id: 2, name: "10:00-12:00" },
    { id: 3, name: "12:00-15:00" },
    { id: 4, name: "15:00-17:00" },
    { id: 5, name: "17:00-19:00" },
    { id: 6, name: "19:00-21:00" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
