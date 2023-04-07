import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';


const appRoutes:Routes = [
{path: '', component: LoginComponent},
{path: 'home', component: HomeComponent},
{path: 'nuevoUsuario', component: NuevoUsuarioComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        AcercaDeComponent,
        EducacionComponent,
        ExperienciaComponent,
        TecnologiasComponent,
        ProyectosComponent,
        ContactoComponent,
        SkillsComponent,
        LoginComponent,
        HomeComponent,
        NuevoUsuarioComponent
    ],
    providers: [CookieService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
    ]
})
export class AppModule { }
