import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Endereco } from '../models/endereco';

const BASE_URL = 'https://viacep.com.br/ws/';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getEndereco(cep: string): Promise<Endereco> {
    const url = `${BASE_URL}${cep}/json`;

    return new Promise<Endereco>((resolve, reject) => {
      this.http.get<Endereco>(url).toPromise().then((endereco: Endereco) => {
        if ('cep' in endereco) {
          resolve(endereco);

        } else {

        }
      });

    });
  }
}
