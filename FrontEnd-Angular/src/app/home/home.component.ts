import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { CookiesService } from '../servicios/cookies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
  }
}


