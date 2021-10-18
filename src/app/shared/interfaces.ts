export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
  email: string;
}

export  interface Reservation {
  id?: string;
  calendar: string;
  reservationTime: string;
  reservationTable: number;
  guests: number;
}

export interface DataBaseCreateResponse {
  name: string
}{

}
