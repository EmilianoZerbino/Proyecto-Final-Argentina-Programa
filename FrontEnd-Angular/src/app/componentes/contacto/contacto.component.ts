import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CookiesService } from 'src/app/servicios/cookies.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  miPortFolio:any;
  chequeoCorrecto:boolean =true;
  linkContacto:any;
  previsualizacionLogo: any;
  logo: any;
  url_logo: any;

  constructor(private datos:PortfolioService,private sanitizer: DomSanitizer,private cookies: CookiesService){}

  ngOnInit(): void {
    this.datos.obtenerUsuario().subscribe(data=>{
      this.miPortFolio = data;
    });
    
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

  eliminar(id:number){
    if(confirm("Seguro que desea eliminar la contacto?")){
      this.datos.eliminar("http://localhost:8080/contactos/delete/"+id);
      this.datos.obtenerUsuario().subscribe(data=>{
        this.miPortFolio = data;
      });
    }
    this.ngOnInit();
  }

  chequear(){
    if(this.linkContacto!=undefined &&
       this.linkContacto!=""){
        this.chequeoCorrecto=false;
       }
       else{
        this.chequeoCorrecto=true;
       }
  }
  
  agregarContacto(){
    const formulariodeDatos = new FormData();
    formulariodeDatos.append('usuario_id', this.cookies.dameId());
    formulariodeDatos.append('linkContacto', this.linkContacto);
    if (this.logo != null) {
      formulariodeDatos.append('image', this.logo);
      this.datos.agregarContactoConImagen(formulariodeDatos);
    } else {
      this.datos.agregarContactoSinImagen(formulariodeDatos);
    }
    alert("Contacto agregada correctamente");
    this.linkContacto=null;
    this.logo=null;
    this.previsualizacionLogo=null;
    this.url_logo=null;
    this.ngOnInit();
  }

}
