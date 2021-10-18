import {Pipe, PipeTransform} from "@angular/core";
import {Reservation} from "../../shared/interfaces";

@Pipe({
  name: 'searchReservation'
})
export class SearchPipe implements PipeTransform {
  transform(reservations: Reservation[], search = ''): Reservation[] {
    if (!search.trim()) {
      return reservations
    }
    return reservations.filter( reservation => {
      return reservation.reservationTime.toLowerCase().includes(search.toLowerCase())
    })
  }

}
