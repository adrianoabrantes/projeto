import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exibir',
  templateUrl: './exibir.component.html',
  styleUrls: ['./exibir.component.css']
})
export class ExibirComponent implements OnInit {

  constructor() { }
  @Input() campo = 0;

  mudouValor = new EventEmitter();

  ngOnInit(): void {
  }

  plus() {
    if (this.campo < 10) {
      this.campo++;
      this.mudouValor.emit({ novoValor: this.campo });
    }
  }
  sub() {
    if (this.campo > 0) {
      this.campo--;
    }
  }

}
