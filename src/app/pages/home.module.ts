import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WorkerInfoComponent } from "./worker-info/worker-info.component";
import { NgxTypedJsModule } from "ngx-typed-js";
import { NavbarComponent } from "./navbar/navbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    WorkerInfoComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: HomeComponent }]),
    NgxTypedJsModule,
    FontAwesomeModule
  ]
})

export class HomeModule {
}
