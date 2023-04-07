import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  [x: string]: any;
  
  constructor(private cookies:CookieService) { }

  guardarId(id: any){
    this.cookies.set("id", id);
  }

  dameId(){
    return this.cookies.get("id");
  }
}
