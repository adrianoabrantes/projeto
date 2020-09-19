import { Component, OnInit } from '@angular/core';


export interface ItensMenu {
  label: string;
  class: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  menuItens: ItensMenu[] = [];
  pagina: string;

  ngOnInit(): void {
    this.menuItens = [
      {
        label: 'calculadora',
        class: 'primary b',
        link: 'calculadora'
      },
      {
        label: 'consulta cep',
        class: 'second b',
        link: 'consulta'
      },
      {
        label: 'consumir API',
        class: 'third b',
        link: 'consumir'
      },
      {
        label: 'curso',
        class: 'fourth b',
        link: 'curso'
      },
      {
        label: 'exibir',
        class: 'fifth b',
        link: 'exibir'
      }
    ];
  }

  eventoClick(evento: string) {
    this.pagina = evento;
  }
}
