import { Component, HostListener, OnInit } from "@angular/core";
import { faUser, faFileText, faCode, faContactBook, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { NavbarService } from "../../service/navbar.service";

export interface Navbar {
  name: string,
  icon: IconDefinition,
  id: number,
}

@Component({
  selector: "cv-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})

export class NavbarComponent implements OnInit {

  public navbarList: Navbar[] = [];
  public activeNavItem: string = "About";

  constructor(public navItem: NavbarService) {
  }

  public ngOnInit(): void {
    this.navbarList = [
      { id: 1, name: "About", icon: faUser },
      { id: 1, name: "Resume", icon: faFileText },
      { id: 1, name: "Works", icon: faCode },
      { id: 1, name: "Contact", icon: faContactBook }
    ];
  }

  public changePage(page: string) {
    this.navItem.setOpenedState(page);
    this.activeNavItem = page;
  }
}
