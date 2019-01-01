import { Component, OnInit } from "@angular/core";
import { Passenger, Child } from "./models/passenger.interface";
@Component({
  selector: "passenger-dashboard",
  styleUrls: ["./passenger-dashboard.component.scss"],
  templateUrl: "./passenger-dashboard.component.html"
})
export class PassengerDashboard implements OnInit {
  passengers: Passenger[];
  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: "Stephen",
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      },
      {
        id: 2,
        fullname: "Rose",
        checkedIn: false,
        checkInDate: null,
        children: [{ name: "Ted", age: 12 }, { name: "Chloe", age: 7 }]
      },
      {
        id: 3,
        fullname: "James",
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
      },
      {
        id: 4,
        fullname: "Louise",
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: "Jessica", age: 1 }]
      },
      {
        id: 5,
        fullname: "Tina",
        checkedIn: false,
        checkInDate: null,
        children: null
      }
    ];
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
