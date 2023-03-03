import { Component } from '@angular/core';
import { SidenavService } from '../../../core/services/sidenav.service';
import { animateText, onSideNavChange } from '../../../core/animations/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [onSideNavChange, animateText]

})
export class SidenavComponent {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: any[] = [
    { name: 'Inbox', link: 'some-link', icon: 'inbox' },
    { name: 'Starred', link: 'some-link', icon: 'star' },
    { name: 'Send email', link: 'some-link', icon: 'send' },
  ]

  menuList: any[] = [
    {
      icon: 'menu',
      link: '',
      description: "Menu"
    },
    {
      icon: 'search',
      link: '/buscar',
      description: "Buscar"
    },

    {
      icon: 'star',
      link: '/favoritos',
      description: "Favoritos"
    },

    {
      icon: 'sms',
      link: '/chat',
      description: "Mensagens"
    },

    {
      icon: 'tune',
      link: '/ajuste',
      description: "ajustes"
    },
    {
      icon: 'assured_workload',
      link: '/documentos',
      description: "Documentos"
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
  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
