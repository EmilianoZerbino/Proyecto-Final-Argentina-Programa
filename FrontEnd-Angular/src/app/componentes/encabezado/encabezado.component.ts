import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { CookiesService } from 'src/app/servicios/cookies.service';
import { Usuario } from 'src/app/clases/Usuario';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  miPortFolio: any;
  usuario: any;
  id: String | undefined;
  url_perfil: any;
  url_fondo: any;
  encabezado: any;

  img: ImageBitmap | undefined;

  public perfil: any;
  public fondo: any;
  public perfilActual: any;
  public fondoActual: any;
  public previsualizacionPerfil: any;
  public previsualizacionFondo: any;

  constructor(
    private datos: PortfolioService,
    private cookies: CookiesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.datos.obtenerUsuario().subscribe((data) => {
      this.miPortFolio = data;
      this.usuario = new Usuario(this.cookies.dameId(), this.miPortFolio);
      this.perfilActual = this.miPortFolio.encabezado.url_perfil;
      this.fondoActual = this.miPortFolio.encabezado.url_fondo;
    });
  }

  editar() {
    if (this.url_perfil != null && this.url_perfil != '') {
      const formulariodeDatos = new FormData();
      formulariodeDatos.append('image', this.perfil);
      formulariodeDatos.append('id', this.miPortFolio.encabezado.id);
      formulariodeDatos.append('tipo', 'perfil');
      this.datos.subirImagen(formulariodeDatos);
      this.perfilActual=this.previsualizacionPerfil;
    }
    if (this.url_fondo != null && this.url_fondo != '') {
      const formulariodeDatos = new FormData();
      formulariodeDatos.append('image', this.fondo);
      formulariodeDatos.append('id', this.miPortFolio.encabezado.id);
      formulariodeDatos.append('tipo', 'fondo');
      this.datos.subirImagen(formulariodeDatos);
      this.fondoActual=this.previsualizacionFondo;
    }
    this.datos.editarEncabezado(this.usuario);
    this.borrar();
  }

  borrar() {
    this.url_perfil = '';
    this.url_fondo = '';
    this.previsualizacionPerfil = null;
    this.previsualizacionFondo = null;
  }

  capturaImgPerfil(event: any) {
    const imagen = event.target.files[0];
    this.extraerBase64(imagen).then((img: any) => {
      this.previsualizacionPerfil = img.base;
    });
    this.perfil = imagen;
  }

  capturaImgFondo(event: any) {
    const imagen = event.target.files[0];
    this.extraerBase64(imagen).then((img: any) => {
      this.previsualizacionFondo = img.base;
    });
    this.fondo = imagen;
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
}
