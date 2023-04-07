import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CookiesService } from '../servicios/cookies.service';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  miPortFolio: any;
  nombre:any;

  constructor(private router:Router,private datos: PortfolioService, private cookies:CookiesService) {
    this.datos.obtenerUsuarios().subscribe((data) => {
      this.miPortFolio = data;
    });
  }

  ngOnInit(): void {
    this.cookies.guardarId(-1);
  }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loginId(email, password);
  }

  loginId(email: string, password: string) {
    let usuarioInvalido=true;
    this.miPortFolio.forEach(
      (element: { email: any; password: any; id: any }) => {
        if (element.email == email && element.password == password) {
          this.cookies.guardarId(element.id);
          usuarioInvalido=false;
          this.router.navigate(['/home'])
        }
      }
    );
    if(usuarioInvalido){
      alert("Email o Password Incorrectos!!! Chequea tus datos. Si aún no tienes cuenta registrate.");
    }
  }
  
  nuevoUsuario(){
    /*
    console.log("Usuario");
    if(this.nombre==null){
      alert("Nombre");
    }else{
      console.log(this.nombre);
    }*/
    this.router.navigate(['/nuevoUsuario']);
  }
  
}
