import { Component, OnInit } from "@angular/core";
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faAngular } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public html = faHtml5;
  public css = faCss3Alt;
  public bt = faBootstrap;
  public js = faJsSquare;
  public angular = faAngular;

  public birthdate = new Date(1995, 11, 6);

  public calculateAge() {
    const birthdate = new Date(this.birthdate).getTime();
    const currentDate = new Date().getTime();
    return Math.floor(Math.abs(currentDate - birthdate) / 31536000000);
  }
}
