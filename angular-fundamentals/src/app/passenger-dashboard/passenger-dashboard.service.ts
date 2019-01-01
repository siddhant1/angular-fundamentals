import { HttpClient } from "@angular/common/http";
import { Passenger } from "./containers/passenger-dashbaord/models/passenger.interface";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const API_ENDPOINT: string = "http://localhost:3000/db.json";
@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}
  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(API_ENDPOINT);
  }
}
