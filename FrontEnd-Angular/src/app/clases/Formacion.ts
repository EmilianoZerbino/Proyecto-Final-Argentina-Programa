export class Formacion{
    
    especialidadName: String | undefined;
    institucionName: String | undefined;
    inicio: String | undefined;
    fin: String | undefined;
    url_logo: String | undefined;
    
  constructor(especialidadName:String,institucionName:String, inicio: String, fin: String){

    this.especialidadName=especialidadName;
    this.institucionName=institucionName;
    this.inicio=inicio;
    this.fin=fin;
  }
}