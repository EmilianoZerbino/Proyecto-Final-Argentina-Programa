import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { NuevoUsuario } from '../clases/NuevoUsuario';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent {
  nombre: any;
  apellido: any;
  email: any;
  password: any;
  passwordConfirmation: any;
  dni: any;
  fechNac: any;

  usuario: any;

  constructor(private datos: PortfolioService, private router: Router) {}

  nuevoUsuario() {
    if (this.nombre == null || this.nombre == '') {
      alert('El campo Nombre debe ser completado');
    } else {
      if (this.apellido == null || this.apellido == '') {
        alert('El campo Apellido debe ser completado');
      } else {
        if (this.email == null || this.email == '') {
          alert('El campo Email debe ser completado');
        } else {
          if (this.password == null || this.password == '') {
            alert('El campo Password debe ser completado');
          } else if (this.password != this.passwordConfirmation) {
            alert(
              "El campo 'Confirme Password' debe ser coincidir con el campo password"
            );
          } else {
            if (this.dni == null || this.dni == '') {
              alert('El campo DNI debe ser completado');
            } else {
              if (this.fechNac == null || this.fechNac == '') {
                alert('El campo Fecha de Nacimiento debe ser completado');
              } else {
                this.usuario = new NuevoUsuario(
                  this.dni,
                  this.fechNac,
                  this.nombre,
                  this.apellido,
                  this.email,
                  this.password
                );
                this.datos.nuevoUsuario(this.usuario);
                alert("Usuario creado con éxito");
                this.router.navigate(['/'])
              }
            }
          }
        }
      }
    }
  }

  volverInicio() {
    this.router.navigate(['/']);
  }

  borrarContenido() {
    this.nombre = '';
    this.apellido = '';
    this.email = '';
    this.password = '';
    this.passwordConfirmation = '';
    this.dni = '';
    this.fechNac = '';
  }
}
