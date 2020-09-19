import { Endereco } from './../models/endereco';
import { ConsultaCepService } from './../services/consulta-cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})

export class ConsultaCepComponent implements OnInit {

  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  campoVazio = true;

  cepFormatado: string;
  estadoSelected: string;
  estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT',
    'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  constructor(private consultaEndereco: ConsultaCepService) { }

  ngOnInit(): void {
  }

  formatarCep(evento: any) {
    this.cepFormatado = evento.target.value;

    if (this.cepFormatado.length === 8) {
      this.cep = this.cepFormatado.substring(0, 5)
        + '-' + this.cepFormatado.substring(5, 8);
    } else {

    }
  }
  limparCampos() {
    this.cep = '';
    this.logradouro = '';
    this.complemento = '';
    this.bairro = '';
    this.localidade = '';
    this.uf = '';
    this.ibge = '';
    this.gia = '';
    this.ddd = '';
    this.siafi = '';
    this.campoVazio = true;

    this.cepFormatado = '';
    this.estadoSelected = '';
  }
  consultaCep() {
    this.consultaEndereco.getEndereco(this.cep).then((endereco: Endereco) => {
      this.cep = endereco.cep;
      this.logradouro = endereco.logradouro;
      this.complemento = endereco.complemento;
      this.bairro = endereco.bairro;
      this.estadoSelected = endereco.uf;
      this.localidade = endereco.localidade;
      this.uf = endereco.uf;
      this.ibge = endereco.ibge;
      this.gia = endereco.gia;
      this.ddd = endereco.ddd;
      this.siafi = endereco.siafi;
    });
    this.campoVazio = false;

  }
}
