import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Usuario } from 'src/app/clases/Usuario';
import { CookiesService } from './cookies.service';
import { AcercaDe } from '../clases/AcercaDe';
import { Institucion } from '../clases/Institucion';
import { Carrera } from '../clases/Carrera';
import { Tecnologia } from '../clases/Tecnologia';
import { Skill } from '../clases/Skill';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient,private cookies:CookiesService) {}

  obtenerUsuarios():Observable<any>{
   return this.http.get('http://localhost:8080/usuarios/ver');
  }

  obtenerUsuario():Observable<any>{
    return this.http.get('http://localhost:8080/usuarios/ver/'+this.cookies.dameId());
   }

  nuevoUsuario(usuario:Usuario){
    return this.http.post("http://localhost:8080/usuarios/new" , usuario ).toPromise().then(data=>{});
  }

  editarEncabezado(usuario:Usuario){
    return this.http.post("http://localhost:8080/usuarios/new" , usuario ).toPromise().then(data=>{});
  }
  
  subirImagen(imagen:FormData){
    return this.http.post('http://localhost:8080/images/new',imagen).toPromise().then(data=>{});
  }

  obtenerEncabezado():Observable<any>{
    return this.http.get('http://localhost:8080/encabezados/ver/'+this.cookies.dameId());
  }

  editarAcercaDe(acercaDe:AcercaDe){
    return this.http.post("http://localhost:8080/acerca_de/new", acercaDe).toPromise().then(data=>{});
  }

  obtenerInstituciones():Observable<any>{
    return this.http.get('http://localhost:8080/instituciones/ver');
  }

  obtenerTecnologias():Observable<any>{
    return this.http.get('http://localhost:8080/tecnologias/ver');
  }

  obtenerSkills():Observable<any>{
    return this.http.get('http://localhost:8080/skills/ver');
  }

  obtenerCarreras():Observable<any>{
    return this.http.get('http://localhost:8080/especialidades/ver');
  }

  agregarInstitucionConImagen(institucion:FormData){
    return this.http.post("http://localhost:8080/instituciones/new1", institucion).toPromise().then(data=>{});
  }
  agregarInstitucionSinImagen(institucion:FormData){
    return this.http.post("http://localhost:8080/instituciones/new2", institucion).toPromise().then(data=>{});
  }

  agregarProyectoConImagen(proyecto:FormData){
    return this.http.post("http://localhost:8080/proyectos/new1", proyecto).toPromise().then(data=>{});
  }
  
  agregarProyectoSinImagen(proyecto:FormData){
    return this.http.post("http://localhost:8080/proyectos/new2", proyecto).toPromise().then(data=>{});
  }

  agregarContactoConImagen(contacto:FormData){
    return this.http.post("http://localhost:8080/contactos/new1", contacto).toPromise().then(data=>{});
  }

  agregarContactoSinImagen(contacto:FormData){
    return this.http.post("http://localhost:8080/contactos/new2", contacto).toPromise().then(data=>{});
  }

  agregarCarrera(carrera:Carrera){
    return this.http.post("http://localhost:8080/especialidades/new", carrera).toPromise().then(data=>{});
  }

  agregarTecnologia(tecnologia:Tecnologia){
    return this.http.post("http://localhost:8080/tecnologias/new", tecnologia).toPromise().then(data=>{});
  }

  agregarTecnologiaUsuario(tecnologiaUsuario:FormData){
    return this.http.post("http://localhost:8080/tecnologiasUsuarios/new", tecnologiaUsuario).toPromise().then(data=>{});
  }

  agregarSkill(skill:Skill){
    return this.http.post("http://localhost:8080/skills/new", skill).toPromise().then(data=>{});
  }

  agregarSkillUsuario(skillUsuario:FormData){
    return this.http.post("http://localhost:8080/skillsUsuarios/new", skillUsuario).toPromise().then(data=>{});
  }

  agregarFormacion(formacion:FormData){
    return this.http.post("http://localhost:8080/formaciones/new", formacion).toPromise().then(data=>{});
  }

  agregarExperiencia(experiencia:FormData){
    return this.http.post("http://localhost:8080/trabajos/new", experiencia).toPromise().then(data=>{});
  }

  obtenerEstadosAcademicos():Observable<any>{
    return this.http.get('http://localhost:8080/estado_academico/ver');
  }

  eliminar(ruta:string){
    return this.http.delete(ruta).toPromise().then(data=>{});
  }

}

