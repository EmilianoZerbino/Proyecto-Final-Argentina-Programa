
export class Institucion{
    nombre:String | undefined;
    acronimo:String | undefined;
    url_logo:String | undefined;
    especialidades:String[] | undefined;
    
  constructor(nombre:String,acronimo:String,url_logo:String){
    this.nombre=nombre;
    this.acronimo=acronimo;
    this.url_logo=url_logo;
    this.especialidades=new Array;
  }
}