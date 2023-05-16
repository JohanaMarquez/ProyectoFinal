import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdministracionComponent } from './components/administracion/administracion.component';

const routes: Routes = [
 { path: '', component:IndexComponent },
 { path: 'administracion', component:AdministracionComponent },
 { path: 'login', component:LoginComponent },
 { path: 'registro', component:RegistroComponent },
 { path: '**', component:ErrorComponent },
 { path: '',redirectTo: 'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
