import { Component, OnInit, Input, EventEmitter } from '@angular/core';

export interface Curso {
  id: number;
  nome: string;
  sala: number;
  turma: string;
}
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursoSelecionado: Curso;
  id: number;
  sala: string;
  turma: string;

  cursos: Curso[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cursos = [
      {
        id: 1,
        nome: 'Instituição criminal',
        sala: 22,
        turma: 'manhã'
      },
      {
        id: 2,
        nome: 'Comportamento Social',
        sala: 11,
        turma: 'manhã'
      }
    ];
  }

  mudouValor(c: any) {
    console.log(c);
    this.id = c;
  }

}
