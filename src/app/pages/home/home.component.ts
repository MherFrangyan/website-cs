import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Subject, Subscription, timer } from "rxjs";

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public timerLoader$: Subscription = new Subscription();
  public loader = true;
  public positions: Array<string> = ["Programmer", "Front-end Developer", " Angular Developer"];

  public bubble: Array<void> = new Array<void>(10);

  constructor(public titleService: Title) { }

  public ngOnInit(): void {
    this.titleService.setTitle('Mher Frangyan - CV');
    this.timerLoader$ = timer(2500).subscribe(() => {
      this.loader = false;
    })
  }

  public ngOnDestroy(): void {
    this.timerLoader$.unsubscribe()
  }

}
