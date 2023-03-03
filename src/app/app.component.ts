import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ailos';

  desktopViewWidth: number = 769;
  sidenavIsOpened: boolean = true;

  folders: any[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: any[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  public breadcumbList: any[] = [
    {
      name: 'Cadastro',
      link: 'cadastro'
    }, {
      name: 'Admissão do Cooperado',
      link: 'cadastro/admissao'
    }, {
      name: 'Nova Admissão de Cooperado',
      link: null
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.sidenavIsOpened = width >= this.desktopViewWidth;
  }
}
