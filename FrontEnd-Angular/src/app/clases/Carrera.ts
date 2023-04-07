import { Institucion } from "./Institucion";

export class Carrera{
    titulo:String | undefined;
    institucion:Institucion | undefined;
    
  constructor(titulo:String,institucion:String){
    this.titulo=titulo;
    this.institucion = new Institucion(institucion,"","");
  }
}