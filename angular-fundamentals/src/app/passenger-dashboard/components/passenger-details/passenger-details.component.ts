import { Component, Input } from "@angular/core";
import { Passenger } from "../../containers/passenger-dashbaord/models/passenger.interface";

@Component({
  selector: "passenger-details",
  templateUrl: "./passenger-details.component.html",
  styleUrls: ["./passenger-details.component.scss"]
})
export class PassengerDetailsComponent {
  @Input()
  detail: Passenger;
}
