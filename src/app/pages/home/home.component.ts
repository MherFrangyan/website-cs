import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public positions: Array<string> = ["Programmer", "Front-end Developer", " Angular Developer"];

  public bubble: Array<void> = new Array<void>(10);

  constructor(public titleService: Title) { }

  public ngOnInit(): void {
    this.titleService.setTitle('Mher Frangyan - CV')
  }

}
