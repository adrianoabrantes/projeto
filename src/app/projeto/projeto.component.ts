import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {
  estados: [
    'Minas Gerais',
    'São Paulo'
  ];
  texto1 = '';
  texto2 = '';
  mudar = false;
  constructor() { }

  ngOnInit(): void {
  }
  btnPrimaryClick() {
    alert('btnPrimary Clicado com sucesso.');
  }

  onKeyUp(evento: KeyboardEvent) {
    const saidaEvento = evento.target as HTMLInputElement;

    this.texto1 = saidaEvento.value;
  }

  lostFocus(evento: KeyboardEvent) {
    const saidaEvento = evento.target as HTMLInputElement;

    this.texto2 = saidaEvento.value;
  }

  mudarCor() {
    this.mudar = !this.mudar;
  }
}
