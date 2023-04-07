import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CookiesService } from 'src/app/servicios/cookies.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  miPortFolio:any;
  chequeoCorrecto:boolean =true;
  nombreProyecto:any;
  linkProyecto:any;
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
    if(confirm("Seguro que desea eliminar la proyecto?")){
      this.datos.eliminar("http://localhost:8080/proyectos/delete/"+id);
      this.datos.obtenerUsuario().subscribe(data=>{
        this.miPortFolio = data;
      });
    }
    this.ngOnInit();
  }

  chequear(){
    if(this.nombreProyecto!=undefined &&
       this.nombreProyecto!="" &&
       this.linkProyecto!=undefined &&
       this.linkProyecto!=""){
        this.chequeoCorrecto=false;
       }
       else{
        this.chequeoCorrecto=true;
       }
  }
  
  agregarProyecto(){
    const formulariodeDatos = new FormData();
    formulariodeDatos.append('usuario_id', this.cookies.dameId());
    formulariodeDatos.append('nombreProyecto', this.nombreProyecto);
    formulariodeDatos.append('linkProyecto', this.linkProyecto);
    if (this.logo != null) {
      formulariodeDatos.append('image', this.logo);
      this.datos.agregarProyectoConImagen(formulariodeDatos);
    } else {
      this.datos.agregarProyectoSinImagen(formulariodeDatos);
    }
    alert("Proyecto agregada correctamente");
    this.nombreProyecto=null;
    this.linkProyecto=null;
    this.logo=null;
    this.previsualizacionLogo=null;
    this.url_logo=null;
    this.ngOnInit();
  }

}
