import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { NavbarService } from "../../service/navbar.service";

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
      switch (item.toLowerCase()) {
        case 'about':
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
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
