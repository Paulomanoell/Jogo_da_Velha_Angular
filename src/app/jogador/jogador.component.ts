import { Component, OnInit, Input } from '@angular/core';
import { JogadaService } from '../jogada.service';
@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  jogadas: JogadaService
  imagem: string;

constructor(jogada: JogadaService) {
  this.jogadas = jogada;
}

ngOnInit() {
}

}
