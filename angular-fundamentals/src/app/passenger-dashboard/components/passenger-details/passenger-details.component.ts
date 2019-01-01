import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../containers/passenger-dashbaord/models/passenger.interface";

@Component({
  selector: "passenger-details",
  templateUrl: "./passenger-details.component.html",
  styleUrls: ["./passenger-details.component.scss"]
})
export class PassengerDetailsComponent {
  edit: boolean = false;
  @Input()
  detail: Passenger;
  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  OnEditing: EventEmitter<any> = new EventEmitter();

  OnNameChange(value: string) {
    this.detail.fullname = value;
  }
  toggleEdit() {
    this.OnEditing.emit(this.detail);
    this.edit = !this.edit;
  }
  Onremove() {
    this.remove.emit(this.detail);
  }
}
