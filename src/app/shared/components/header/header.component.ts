import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenavIsOpened: boolean = true;
  @Input() breadcumbList: any[] = [
    {
      name: 'Home',
      link: null
    }
  ];

  pageTitle: string = "Nova Admissão Cooperado";


  hidenNotificationCount: boolean = true;
  notification: any[] = [{}, {}];

  ngOnInit(): void {
    this.hidenNotificationCount = this.notification.length > 0 ? false : true;
  }
}
