import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { NavbarService } from "../../service/navbar.service";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

@Component({
  selector: 'cv-worker-data',
  templateUrl: './worker-data.component.html',
  styleUrls: ['./worker-data.component.scss'],
})
export class WorkerDataComponent implements AfterViewInit{
  @ViewChild("about") about!: ElementRef;
  @ViewChild("contact") contact!: ElementRef;
  @ViewChild("portfolio") portfolio!: ElementRef;
  @ViewChild("resume") resume!: ElementRef;

  constructor(public nav: NavbarService) { }

  public ngAfterViewInit(): void {
    this.nav.isOpened.subscribe(item => {
      console.log(item);
      switch (item.toLowerCase()) {
        case 'about':
          this.about.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
          break;
        case 'contact':
          this.contact.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
          break;
        case 'works':
          this.portfolio.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
          break;
        case 'resume':
          this.resume.nativeElement.scrollIntoView({behavior: 'smooth',  block: 'start', inline: 'start'})
          break;
      }
    })
  }

}
