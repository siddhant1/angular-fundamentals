import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}
@Component({ 
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name: String = "";
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false
    },
    {
      id: 3,
      fullname: "James",
      checkedIn: true
    },
    {
      id: 4,
      fullname: "Louise",
      checkedIn: true
    },
    {
      id: 5,
      fullname: "Tina",
      checkedIn: false
    }
  ];
  handleChange(value: String) {
    this.name = value;
  }
}
