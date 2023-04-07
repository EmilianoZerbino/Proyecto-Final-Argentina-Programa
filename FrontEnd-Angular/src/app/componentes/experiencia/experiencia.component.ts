import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Institucion } from 'src/app/clases/Institucion';
import { CookiesService } from 'src/app/servicios/cookies.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent {
  miPortFolio: any;
  institucionName: any;
  formInst: boolean = false;
  instituciones: any;
  acronimoInstitucion: any;
  nombreInstitucion: any;
  logo: any;
  previsualizacionLogo: any;
  url_logo: any;
  chequeoCorrecto: boolean = true;
  checkTrabajo: boolean = true;
  inicio: any;
  fin: any;
  cargo: any;

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
  }

  habilitarAgregarInstitucion() {
    this.formInst = !this.formInst;
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

  chequear() {
    console.log(this.institucionName);
    console.log(this.cargo);
    if (
      this.institucionName != undefined &&
      this.institucionName != '' &&
      this.cargo != undefined &&
      this.cargo != ''
    ) {
      this.chequeoCorrecto = false;
    } else {
      this.chequeoCorrecto = true;
    }
  }

  agregarExperiencia() {
    const formulariodeDatos = new FormData();
    formulariodeDatos.append('usuario_id', this.cookies.dameId());
    formulariodeDatos.append('cargo', this.cargo);
    formulariodeDatos.append('nombreInstitucion', this.institucionName);
    if (this.inicio == null) {
      this.inicio = '1900-01-01';
    }
    formulariodeDatos.append('inicio', this.inicio);
    if (this.fin == null && this.checkTrabajo == false) {
      this.fin = '1900-01-01';
    } else if (this.fin == null && this.checkTrabajo == true) {
      this.fin = '1901-01-01';
    }
    formulariodeDatos.append('fin', this.fin);
    this.datos.agregarExperiencia(formulariodeDatos);
    this.chequeoCorrecto = true;
    alert('Experiencia agregada con éxito');
    this.cargo = '';
    this.institucionName = '';
    this.inicio=null;
    this.fin=null;
    this.checkTrabajo=true;
    this.ngOnInit();
  }

  eliminar(id: number) {
    if (confirm('Seguro que desea eliminar la experiencia?')) {
      this.datos.eliminar('http://localhost:8080/trabajos/delete/' + id);
      this.datos.obtenerUsuario().subscribe((data) => {
        this.miPortFolio = data;
      });
    }
    this.ngOnInit();
  }
}
