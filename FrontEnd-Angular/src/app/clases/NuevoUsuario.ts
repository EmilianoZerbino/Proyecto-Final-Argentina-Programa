export class NuevoUsuario{

    dni:String | undefined;
    fechNac:Date | undefined;
    nombres:String | undefined;
    apellidos:String | undefined;
    email:String | undefined;
    password:String | undefined;

    constructor(dni:string, fech_nac:Date, nombres:string, apellidos:string, email:string, password:string){
        this.dni = dni;
        this.fechNac = fech_nac;
        this.nombres= nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
    }
}