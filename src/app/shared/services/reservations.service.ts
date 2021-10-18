import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataBaseCreateResponse, Reservation} from "../interfaces";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class ReservationsService {
  constructor(private http: HttpClient) {
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post(`${environment.dataUrl}/reservations.json`, reservation)
      .pipe(map((resp: DataBaseCreateResponse) => {
        return {
          ...reservation,
          id: resp.name
     }
    }))
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get(`${environment.dataUrl}/reservations.json`)
      .pipe(map( (response:{[key: string]: any}) => {
        return Object
          .keys(response)
          .map( key => ({
            ...response[key],
            id: key
          }))
      }))
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.dataUrl}/reservations/${id}.json`)
  }
}
