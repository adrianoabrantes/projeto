import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formatar-campos',
  templateUrl: './formatar-campos.component.html',
  styleUrls: ['./formatar-campos.component.css']
})
export class FormatarCamposComponent implements OnInit {
  nome = '';
  @Input() nomeCurso;
  valorEntrada: '';
  cpf: any;
  cnpj: any;
  foneFixo: any;
  celular: any;

  constructor() { }

  ngOnInit(): void {
  }

  formatarCpf(evento: any) {
    this.valorEntrada = evento.target.value;

    if (this.valorEntrada.length === 11) {
      this.cpf = this.valorEntrada.substring(0, 3)
        + '.' + this.valorEntrada.substring(3, 6)
        + '.' + this.valorEntrada.substring(6, 9)
        + '-' + this.valorEntrada.substring(9, 11);
    }
  }
  formatarCnpj(evento: any) {
    this.valorEntrada = evento.target.value;

    if (this.valorEntrada.length === 14) {
      this.cnpj = this.valorEntrada.substring(0, 2)
        + '.' + this.valorEntrada.substring(2, 5)
        + '.' + this.valorEntrada.substring(5, 8)
        + '/' + this.valorEntrada.substring(8, 12)
        + '-' + this.valorEntrada.substring(12, 14);
    }
  }
  formatarFoneFixo(evento: any) {
    this.valorEntrada = evento.target.value;

    if (this.valorEntrada.length === 10) {
      this.foneFixo = '(' + this.valorEntrada.substring(0, 2)
        + ') ' + this.valorEntrada.substring(2, 6)
        + '-' + this.valorEntrada.substring(6, 10);
    }
  }
  formatarCelular(evento: any) {
    this.valorEntrada = evento.target.value;

    if (this.valorEntrada.length === 11) {
      this.celular = '(' + this.valorEntrada.substring(0, 2)
        + ') ' + this.valorEntrada.substring(2, 3)
        + ' ' + this.valorEntrada.substring(3, 7)
        + '-' + this.valorEntrada.substring(7, 11);
    }
  }
}
