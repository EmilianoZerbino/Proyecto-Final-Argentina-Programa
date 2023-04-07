import { Component } from '@angular/core';
import { Skill } from 'src/app/clases/Skill';
import { CookiesService } from 'src/app/servicios/cookies.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  miPortFolio: any;
  skillName: any;
  nombreSkill: any;
  formSkill: boolean = false;
  skills: any;
  chequeoCorrecto: boolean = true;
  nivel: number = 0;
  checkNivel: boolean = false;
  errorNivel: boolean = false;

  constructor(private datos: PortfolioService,private cookies: CookiesService) {}

  ngOnInit(): void {
    this.datos.obtenerUsuario().subscribe((data) => {
      this.miPortFolio = data;
    });
    this.datos.obtenerSkills().subscribe((data) => {
      this.skills = data;
    });
  }

  chequearNivel() {
    console.log(this.nivel);
    if (this.nivel < 1 || this.nivel > 100) {
      this.checkNivel = false;
      this.errorNivel = true;
    } else {
      this.checkNivel = true;
      this.errorNivel = false;
    }
    this.chequear();
  }

  chequear() {
    console.log(this.skillName);
    console.log(this.nivel);
    if (this.skillName != undefined && this.checkNivel == true) {
      this.chequeoCorrecto = false;
    } else {
      this.chequeoCorrecto = true;
    }
  }

  habilitarAgregarSkill() {
    this.formSkill = !this.formSkill;
  }

  nuevaSkill() {
    if (this.nombreSkill == undefined || this.nombreSkill == '') {
      alert("El campo Nueva debe ser completado");
    }else{
      var skill = new Skill(this.nombreSkill);
      this.skills.push(skill);
      this.datos.agregarSkill(skill);
      this.skillName=this.nombreSkill;
      this.formSkill=!this.formSkill;
    }
  }

  agregarSkill() {
    const formulariodeDatos = new FormData();
    formulariodeDatos.append('usuario_id', this.cookies.dameId());
    formulariodeDatos.append('nombre', this.skillName);
    formulariodeDatos.append('nivel', this.nivel.toString());
    this.datos.agregarSkillUsuario(formulariodeDatos);
    this.skillName=null;
    this.nivel=0;
    alert("Skill agregada correctamente");
    this.ngOnInit();
  }

  eliminar(id: number) {
    if (confirm('Seguro que desea eliminar la tecnología?')) {
      this.datos.eliminar(
        'http://localhost:8080/skillsUsuarios/delete/' + id
      );
      this.datos.obtenerUsuario().subscribe((data) => {
        this.miPortFolio = data;
      });
    }
    this.ngOnInit();
  }
}
