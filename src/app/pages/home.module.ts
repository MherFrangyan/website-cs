import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WorkerInfoComponent } from "./worker-info/worker-info.component";
import { NgxTypedJsModule } from "ngx-typed-js";
import { NavbarComponent } from "./navbar/navbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { WorkerDataComponent } from "./worker-data/worker-data.component";
import { AboutComponent } from "./worker-data/components/about/about.component";
import { ResumeComponent } from "./worker-data/components/resume/resume.component";
import { PortfolioComponent } from "./worker-data/components/portfolio/portfolio.component";
import { ContactComponent } from "./worker-data/components/contact/contact.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    WorkerInfoComponent,
    NavbarComponent,
    WorkerDataComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: HomeComponent }]),
    ReactiveFormsModule,
    NgxTypedJsModule,
    FontAwesomeModule,
  ]
})

export class HomeModule {
}
