export class Usuario{

        id:String | undefined;
        dni:String | undefined;
        fechNac:Date | undefined;
        nombres:String | undefined;
        apellidos:String | undefined;
        email:String | undefined;
        password:String | undefined;
        intereses:String | undefined;

        constructor(id:String,miPortFolio:any){
          this.id=id;
          this.dni=miPortFolio.dni;
          this.fechNac=miPortFolio.fech_nac;
          this.nombres=miPortFolio.nombres;
          this.apellidos=miPortFolio.apellidos;
          this.email=miPortFolio.email;
          this.password=miPortFolio.password;
          this.intereses =miPortFolio.intereses;
        }


}