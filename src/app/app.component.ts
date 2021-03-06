import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.auth.autoLogin();
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
