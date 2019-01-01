import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PassengerDashboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
