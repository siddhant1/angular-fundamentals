import { PassengerDashboardService } from "./../../passenger-dashboard.service";
import { Component, OnInit } from "@angular/core";
import { Passenger} from "./models/passenger.interface";
@Component({
  selector: "passenger-dashboard",
  styleUrls: ["./passenger-dashboard.component.scss"],
  templateUrl: "./passenger-dashboard.component.html"
})
export class PassengerDashboard implements OnInit {
  constructor(private passengerService: PassengerDashboardService) {}
  passengers: Passenger[];
  ngOnInit() {
    this.passengers = this.passengerService.getPassengers();
  }
  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger.fullname = event.fullname;
      }
      return passenger;
    });
  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter(
      (passenger: Passenger) => passenger.id !== event.id
    );
  }
}
