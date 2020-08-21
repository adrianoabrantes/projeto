import { ProjetoModule } from './projeto/projeto.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjetoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
