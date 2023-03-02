import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ailos';

  hidenNotificationCount: boolean = true;
  notification: any[] = [{}, {}];

  constructor() {
  }

  ngOnInit(): void {
    this.hidenNotificationCount = this.notification.length > 0 ? false : true;
  }
}
