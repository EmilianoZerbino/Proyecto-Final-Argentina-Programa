import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  static id: number = 0;

  title = 'appArgProg';
  imagen: string = 'assets/imagenes/img_fondo.jpg';
  constructor() {}
}
