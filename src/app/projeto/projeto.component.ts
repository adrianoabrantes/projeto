import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {
  estados: ['Minas Gerais',
    'São Paulo'

  ];
  constructor() { }

  ngOnInit(): void {
  }
  btnPrimaryClick() {
    alert('btnPrimary Clicado com sucesso.');
  }

  onKeyUp() {

  }
}
