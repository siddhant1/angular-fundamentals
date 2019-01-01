import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PassengerDashboard } from "./containers/passenger-dashbaord/passenger-dashboard.component";
import { PassengerDetailsComponent } from "./components/passenger-details/passenger-details.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboard,
    PassengerDetailsComponent,
    PassengerCountComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [PassengerDashboard],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
