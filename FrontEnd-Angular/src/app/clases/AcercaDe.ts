import { Usuario } from "./Usuario";

export class AcercaDe{
    id:String | undefined;
    acerca_de:String | undefined;
    usuarioId:String | undefined;
    
  constructor(id:String,acerca_de:String,usuarioId:String){
    this.id=id;
    this.acerca_de=acerca_de;
    this.usuarioId=usuarioId;
  }
}