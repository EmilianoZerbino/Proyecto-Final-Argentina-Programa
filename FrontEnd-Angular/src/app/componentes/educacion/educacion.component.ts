import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Carrera } from 'src/app/clases/Carrera';
import { Formacion } from 'src/app/clases/Formacion';
import { Institucion } from 'src/app/clases/Institucion';
import { CookiesService } from 'src/app/servicios/cookies.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent {
  miPortFolio: any;
  instituciones: any;
  carreras: any;
  carrerasListadas: any = [];
  estadosAcademicos: any = [];
  formaciones: any = [];
  institucionName: any;
  formInst: boolean = false;
  formCarr: boolean = false;
  logo: any;
  previsualizacionLogo: any;
  url_logo: any;
  acronimoInstitucion: any;
  nombreInstitucion: any;
  institucion: any;
  titulo: any;
  tituloCarrera: any;
  estadoAcademico: any;
  inicio: any;
  fin: any;
  chequeoCorrecto: boolean = true;

  constructor(
    private datos: PortfolioService,
    private sanitizer: DomSanitizer,
    private cookies: CookiesService
  ) {}

  ngOnInit(): void {
    this.datos.obtenerUsuario().subscribe((data) => {
      this.miPortFolio = data;
    });
    this.datos.obtenerInstituciones().subscribe((data) => {
      this.instituciones = data;
    });
    this.datos.obtenerCarreras().subscribe((data) => {
      this.carreras = data;
    });
    this.datos.obtenerEstadosAcademicos().subscribe((data) => {
      this.estadosAcademicos = data;
    });
  }

  cargarCarreras() {
    this.carrerasListadas = [];
    for (var i = 0; i < this.carreras.length; i++) {
      if (this.carreras[i].institucionName == this.institucionName) {
        this.carrerasListadas.push(this.carreras[i]);
      }
    }
    this.chequear();
  }

  habilitarAgregarInstitucion() {
    this.formInst = !this.formInst;
  }

  habilitarAgregarCarrera() {
    this.formCarr = !this.formCarr;
  }

  capturaImgLogo(event: any) {
    const imagen = event.target.files[0];
    this.extraerBase64(imagen).then((img: any) => {
      this.previsualizacionLogo = img.base;
    });
    this.logo = imagen;
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          Blob: $event,
          image,
          base: reader.result,
        });
      };
      reader.onerror = (error) => {
        resolve({
          base: null,
        });
      };
    });

  eliminar(id: number) {
    if (confirm('Seguro que desea eliminar la formacion?')) {
      this.datos.eliminar('http://localhost:8080/formaciones/delete/' + id);
      this.datos.obtenerUsuario().subscribe((data) => {
        this.miPortFolio = data;
      });
    }
    this.ngOnInit();
  }

  AgregarInstitucion() {
    if (
      this.nombreInstitucion != undefined &&
      this.acronimoInstitucion != undefined &&
      this.nombreInstitucion != '' &&
      this.acronimoInstitucion != ''
    ) {
      const formulariodeDatos = new FormData();
      formulariodeDatos.append('nombre', this.nombreInstitucion);
      formulariodeDatos.append('acronimo', this.acronimoInstitucion);
      if (this.logo != null) {
        formulariodeDatos.append('image', this.logo);
        this.datos.agregarInstitucionConImagen(formulariodeDatos);
      } else {
        this.datos.agregarInstitucionSinImagen(formulariodeDatos);
      }
      var inst = new Institucion(
        this.nombreInstitucion,
        this.acronimoInstitucion,
        ''
      );
      this.instituciones.push(inst);
      this.institucionName = inst.nombre;

      this.formInst = !this.formInst;
      this.carrerasListadas = [];
      this.titulo="";
      this.chequear();
      alert('Institución agregada con éxito');
      this.ngOnInit();
    } else if (
      this.nombreInstitucion == undefined ||
      this.nombreInstitucion == ''
    ) {
      alert('El campo "Nombre de la Institucion" no puede quedar vacio');
    } else {
      alert('El campo "Acronimo" no puede quedar vacio');
    }
  }

  AgregarCarrera() {
    if (this.tituloCarrera != undefined && this.tituloCarrera != '') {
      var carr = new Carrera(this.tituloCarrera, this.institucionName);
      this.datos.agregarCarrera(carr);
      this.carrerasListadas.push(carr);
      this.titulo = this.tituloCarrera;
      this.formCarr = !this.formCarr;
      this.chequear();
      alert('Carrera agregada con éxito');
      this.ngOnInit();
    } else {
      alert('El campo "Nombre de la Carrera" no puede quedar vacio');
    }
  }

  agregarFormacion() {
    const formulariodeDatos = new FormData();
    formulariodeDatos.append('usuario_id', this.cookies.dameId());
    formulariodeDatos.append('nombreCarrera', this.titulo);
    formulariodeDatos.append('nombreInstitucion', this.institucionName);
    if (this.inicio == null) {
      this.inicio = '1900-01-01';
    }
    formulariodeDatos.append('inicio', this.inicio);
    if (this.fin == null) {
      this.fin = '1900-01-01';
    }
    formulariodeDatos.append('fin', this.fin);
    formulariodeDatos.append('estado_id', this.estadoAcademico);
    this.datos.agregarFormacion(formulariodeDatos);
    this.chequeoCorrecto=true;
    alert('Formacion agregada con éxito');
    this.ngOnInit();
  }

  chequear() {
    if (
      this.institucionName != undefined &&
      this.institucionName != '' &&
      this.titulo != undefined &&
      this.titulo != '' &&
      this.estadoAcademico != undefined &&
      this.estadoAcademico != ''
    ) {
      this.chequeoCorrecto=false;
    }else{
      this.chequeoCorrecto=true;
    }
  }
}
