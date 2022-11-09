import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule } from '@angular/common/http';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedModule } from './components/shared/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule} from '@angular/material/stepper';

import { MatIconModule } from '@angular/material/icon';



import { PerfilPublicoComponent } from './components/Perfil-publico/Perfil-publico.component';
import { SobreMiComponent } from './components/Sobre-Mi/Sobre-Mi.component';
import { ConsultaComponent } from './components/Consulta/Consulta.component';

const appRoutes: Routes = [


]




@NgModule({
  declarations: [
    AppComponent,
    PerfilPublicoComponent,
    SobreMiComponent,
    ConsultaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatSelectModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,MatButtonToggleModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
