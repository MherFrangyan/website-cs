import { Component, OnInit } from '@angular/core';
import { faUser, faFileText, faCode, faContactBook, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Navbar {
  name: string,
  icon: IconDefinition,
  id: number,
}

@Component({
  selector: 'cv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  public navbarList: Navbar[] = [];

  public ngOnInit(): void {
    this.navbarList = [
      { id: 1, name: 'About', icon: faUser },
      { id: 1, name: 'Resume', icon: faFileText },
      { id: 1, name: 'Works', icon: faCode },
      { id: 1, name: 'Contact', icon: faContactBook },
    ];
  }
}
