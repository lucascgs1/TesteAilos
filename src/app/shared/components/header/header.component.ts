import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: any;
  @Input() sidenavIsOpened: boolean = true;
  @Input() pageTitle: string = "Nova Admissão Cooperado";
  @Input() breadcumbList: any[] = [
    {
      name: 'Home',
      link: null
    }
  ];



  hidenNotificationCount: boolean = true;
  notification: any[] = [{}, {}];

  ngOnInit(): void {
    this.hidenNotificationCount = this.notification.length > 0 ? false : true;
  }
}
