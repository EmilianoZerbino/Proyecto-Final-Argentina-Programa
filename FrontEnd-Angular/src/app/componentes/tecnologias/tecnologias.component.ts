import { Component } from '@angular/core';
import { Tecnologia } from 'src/app/clases/Tecnologia';
import { CookiesService } from 'src/app/servicios/cookies.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css'],
})
export class TecnologiasComponent {
  miPortFolio: any;
  tecnologiaName: any;
  nombreTecnologia: any;
  formTec: boolean = false;
  tecnologias: any;
  chequeoCorrecto: boolean = true;
  nivel: number = 0;
  checkNivel: boolean = false;
  errorNivel: boolean = false;

  constructor(private datos: PortfolioService,private cookies: CookiesService) {}

  ngOnInit(): void {
    this.datos.obtenerUsuario().subscribe((data) => {
      this.miPortFolio = data;
    });
    this.datos.obtenerTecnologias().subscribe((data) => {
      this.tecnologias = data;
    });
  }

  chequearNivel() {
    console.log(this.nivel);
    if (this.nivel < 1 || this.nivel > 100) {
      this.checkNivel = false;
      this.errorNivel = true;
    } else {
      this.checkNivel = true;
      this.errorNivel = false;
    }
    this.chequear();
  }

  chequear() {
    console.log(this.tecnologiaName);
    console.log(this.nivel);
    if (this.tecnologiaName != undefined && this.checkNivel == true) {
      this.chequeoCorrecto = false;
    } else {
      this.chequeoCorrecto = true;
    }
  }

  habilitarAgregarTecnologia() {
    this.formTec = !this.formTec;
  }

  nuevaTecnologia() {
    if (this.nombreTecnologia == undefined || this.nombreTecnologia == '') {
      alert("El campo Nueva debe ser completado");
    }else{
      var tecnologia = new Tecnologia(this.nombreTecnologia);
      this.tecnologias.push(tecnologia);
      this.datos.agregarTecnologia(tecnologia);
      this.tecnologiaName=this.nombreTecnologia;
      this.formTec=!this.formTec;
    }
  }

  agregarTecnologia() {
    const formulariodeDatos = new FormData();
    formulariodeDatos.append('usuario_id', this.cookies.dameId());
    formulariodeDatos.append('nombre', this.tecnologiaName);
    formulariodeDatos.append('nivel', this.nivel.toString());
    this.datos.agregarTecnologiaUsuario(formulariodeDatos);
    this.tecnologiaName=null;
    this.nivel=0;
    alert("Tecnologia agregada correctamente");
    this.ngOnInit();
  }

  eliminar(id: number) {
    if (confirm('Seguro que desea eliminar la tecnología?')) {
      this.datos.eliminar(
        'http://localhost:8080/tecnologiasUsuarios/delete/' + id
      );
      this.datos.obtenerUsuario().subscribe((data) => {
        this.miPortFolio = data;
      });
    }
    this.ngOnInit();
  }
}
