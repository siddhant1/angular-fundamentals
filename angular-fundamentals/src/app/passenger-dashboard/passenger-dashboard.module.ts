import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerDashboard } from "./containers/passenger-dashbaord/passenger-dashboard.component";
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';

@NgModule({
  declarations: [PassengerDashboard, PassengerDetailsComponent, PassengerCountComponent],
  imports: [CommonModule],
  exports: [PassengerDashboard]
})
export class PassengerDashboardModule {}
