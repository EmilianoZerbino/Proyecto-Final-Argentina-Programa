import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { CookiesService } from 'src/app/servicios/cookies.service';
import { AcercaDe } from 'src/app/clases/AcercaDe';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  miPortFolio:any;
  acercaDe:any;

  constructor(private datos:PortfolioService,private cookies:CookiesService){}


  ngOnInit(): void {
    this.datos.obtenerUsuario().subscribe(data=>{
      this.miPortFolio = data;
      if(this.miPortFolio.acercaDe){
        this.acercaDe = new AcercaDe(this.miPortFolio.acercaDe.id,this.miPortFolio.acercaDe.acerca_de,this.cookies.dameId());
      }else{
      this.acercaDe = new AcercaDe(this.cookies.dameId(),"",this.cookies.dameId());
      this.editar();
      }
    });
  }

  
  editar(){
    this.datos.editarAcercaDe(this.acercaDe);
  }

}
