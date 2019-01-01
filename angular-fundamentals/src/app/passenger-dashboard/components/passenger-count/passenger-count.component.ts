import { Component, Input } from "@angular/core";
import { Passenger } from "../../containers/passenger-dashbaord/models/passenger.interface";

@Component({
  selector: "passenger-count",
  templateUrl: "./passenger-count.component.html",
  styleUrls: ["./passenger-count.component.css"]
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];
  checkedInCount() {
    return this.items.filter((passenger: Passenger) => passenger.checkedIn)
      .length;
  }
}
