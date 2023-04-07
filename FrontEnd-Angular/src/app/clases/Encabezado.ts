import { Usuario } from "./Usuario";

export class Encabezado{

    usuario:any;

    constructor(id: number){
        this.usuario=new Usuario("1",null);
    }
    
}