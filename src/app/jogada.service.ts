import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogadaService {
  

  jogador:string;
  imagem:string;


  troca(s:string){
    if(s == 'jog1'){
      this.imagem = '../assets/1.png';
    }else{
      this.imagem = '../assets/2.png';
    }
  }

  limpar(){

  }
  constructor() { }
}
