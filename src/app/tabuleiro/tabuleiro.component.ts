import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css']
})
export class TabuleiroComponent implements OnInit {

  limpa:boolean;

  constructor() { }

  ngOnInit() {
  }

  restart(){
    this.limpa = true;
  }
}
