import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoComponent } from './projeto.component';



@NgModule({
  declarations: [ProjetoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProjetoComponent
  ]
})
export class ProjetoModule { }
