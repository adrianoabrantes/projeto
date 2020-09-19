import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { ExibirComponent } from './exibir/exibir.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConsumirApiRestComponent } from './consumir-api-rest/consumir-api-rest.component';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';
import { FormatarCamposComponent } from './formatar-campos/formatar-campos.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    ExibirComponent,
    CalculadoraComponent,
    ConsumirApiRestComponent,
    ConsultaCepComponent,
    FormatarCamposComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
