import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BannerComponent } from './components/banner/banner.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { AcercademiComponent } from './components/acercademi/acercademi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionacademicaComponent } from './components/formacionacademica/formacionacademica.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AdmacercademiComponent } from './components/administracion/admacercademi/admacercademi.component';
import { AdmeducacionComponent } from './components/administracion/admeducacion/admeducacion.component';
import { AdmredessocialesComponent } from './components/administracion/admredessociales/admredessociales.component';
import { AdmexperienciaComponent } from './components/administracion/admexperiencia/admexperiencia.component';
import { AdmhabilidadesComponent } from './components/administracion/admhabilidades/admhabilidades.component';
import { AdmhabilidadesblandasComponent } from './components/administracion/admhabilidadesblandas/admhabilidadesblandas.component';
import { AdmproyectosComponent } from './components/administracion/admproyectos/admproyectos.component';
import { PortfolioService } from './servicio/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    BannerComponent,
    PresentacionComponent,
    AcercademiComponent,
    ExperienciaComponent,
    FormacionacademicaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PiedepaginaComponent,
    AdministracionComponent,
    AdmacercademiComponent,
    AdmeducacionComponent,
    AdmredessocialesComponent,
    AdmexperienciaComponent,
    AdmhabilidadesComponent,
    AdmhabilidadesblandasComponent,
    AdmproyectosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
