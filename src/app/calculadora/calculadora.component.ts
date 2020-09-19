import { Component, EventEmitter, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }
  display = 0;
  valorEntrada: any;
  botoesTeclado: any = [];
  botoesNome: any = [];
  botoesFuncionais = [];
  funcao = true;
  valor = 0;
  resultado = 0;
  operador = '+';
  operar = '';

  ngOnInit(): void {
    this.botoesTeclado = ['CE', 'C', 'backspace', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', '.', 0, ',', '='];
    this.botoesFuncionais = ['CE', 'C', 'backspace', '/', 'X', '-', '+', '='];
  }

  clickBotao(evento: any) {
    this.valorEntrada = evento.target.value;

    for (const botao of this.botoesFuncionais) {
      this.funcao = true;

      if (this.valorEntrada === botao) {
        this.funcao = false;
        break;
      }
    }

    if (this.funcao) {
      if (this.display === 0) {
        this.display = this.valorEntrada;

      } else {
        this.display += this.valorEntrada;
      }
    } else {
      switch (this.valorEntrada) {
        case 'CE':
          this.valor = 0;
          this.resultado = 0;
          this.display = 0;
          break;

        case 'C':
          this.display = 0;
          break;

        case 'backspace':

          break;

        case '+':
          this.valor = this.display;
          this.display = 0;
          this.operar = '+';
          break;

        case '-':
          this.valor = this.display;
          this.display = 0;
          this.operar = '-';
          break;

        case 'X':
          this.valor = this.display;
          this.display = 0;
          this.operar = 'X';
          break;

        case '/':
          this.valor = this.display;
          this.display = 0;
          this.operar = '/';
          break;

        case '=':
          this.resultado = this.operacao(this.valorEntrada, this.valor, this.display);
          this.display = this.resultado;
          break;
      }

    }


    console.log(this.display);
    console.log(this.valorEntrada);
    console.log(this.valor);
    console.log(this.resultado);
  }

  operacao(operador: string, valor1: any, valor2: any) {
    if (this.operar === '/') {
      return valor1 / valor2;
    } else if (this.operar === 'X') {
      return valor1 * valor2;
    } else if (this.operar === '+') {
      return parseFloat(valor1) + parseFloat(valor2);
    } else if (this.operar === '-') {
      return valor1 - valor2;
    }
  }
}
