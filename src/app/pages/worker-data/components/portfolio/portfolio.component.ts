import { Component } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cv-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  public link = faExternalLink;

  public portfolioListLeft = [
    { id: 1, name: 'Gyumri Theatre', url: 'https://gyumritheatre.am/', img: 'teater.webp' },
    { id: 2, name: 'Trigyan', url: 'http://glide.trigyan.us/', img: 'trigyan.png' },
    { id: 3, name: 'Brain Fors', url: 'https://brainfors.com/', img: 'brainfors.png' },
  ];

  public portfolioListRight = [
    { id: 4, name: 'Aireno Wolrd', url: 'https://www.airenoworld.com/', img: 'aireno.png' },
    { id: 5, name: 'Bob AI', url: 'https://bob.ai/', img: 'bob.png' },
    { id: 6, name: 'Upstart', url: 'https://upstart.am/', img: 'upstart.png' },
    {
      id: 7,
      name: 'Master Productions',
      url: 'https://www.masterproductionsbh.com/',
      img: 'master_productions.png',
    },
  ];
}
