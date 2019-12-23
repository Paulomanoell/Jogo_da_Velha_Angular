import { Component, OnInit, ɵCodegenComponentFactoryResolver, Input } from '@angular/core';
import { JogadaService } from '../jogada.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css'],
})
export class CasaComponent implements OnInit {

  jog1: string = "Pica-Pau";
  jog2: string = "Zeca-Urubu";
  jogador: string = "jog1";
  vencedor: string ="";
  campo_a1: string = "";
  campo_a2: string = "";
  campo_a3: string = "";
  campo_b1: string = "";
  campo_b2: string = "";
  campo_b3: string = "";
  campo_c1: string = "";
  campo_c2: string = "";
  campo_c3: string = "";
  imagem1: string = "../../assets/3.png";
  imagem2: string = "../../assets/3.png";
  imagem3: string = "../../assets/3.png";
  imagem4: string = "../../assets/3.png";
  imagem5: string = "../../assets/3.png";
  imagem6: string = "../../assets/3.png";
  imagem7: string = "../../assets/3.png";
  imagem8: string = "../../assets/3.png";
  imagem9: string = "../../assets/3.png";

  @Input() limpa: boolean;

  async clicou(index: number) {
    
    if (index === 1 && this.imagem1 == "../../assets/3.png") {
      if (this.jogador == "jog1") {
        this.imagem1 = "../../assets/1.png";
        this.jogador = "jog2";
        this.campo_a1 = "jog1";
      } else if (this.jogador == "jog2") {
        this.imagem1 = "../../assets/2.png";
        this.jogador = "jog1";
        this.campo_a1 = "jog2";
      }
    }
    else if (index === 2 && this.imagem2 == "../../assets/3.png") {
      if (this.jogador == "jog1") {
        this.imagem2 = "../../assets/1.png";
        this.jogador = "jog2";
        this.campo_a2 = "jog1";
      } else if (this.jogador == "jog2") {
        this.imagem2 = "../../assets/2.png";
        this.jogador = "jog1";
        this.campo_a2 = "jog2";
      }
    }
    else if (index === 3 && this.imagem3 == "../../assets/3.png") {
      if (this.jogador == "jog1") {
        this.imagem3 = "../../assets/1.png";
        this.jogador = "jog2";
        this.campo_a3 = "jog1";
      } else if (this.jogador == "jog2") {
        this.imagem3 = "../../assets/2.png";
        this.jogador = "jog1";
        this.campo_a3 = "jog2";
      }
    }
    else if (index === 4 && this.imagem4 == "../../assets/3.png") {
      if (this.jogador == "jog1") {
        this.imagem4 = "../../assets/1.png";
        this.jogador = "jog2";
        this.campo_b1 = "jog1";
      } else if (this.jogador == "jog2") {
        this.imagem4 = "../../assets/2.png";
        this.jogador = "jog1";
        this.campo_b1 = "jog2";
      }
    }
    else if (index === 5 && this.imagem5 == "../../assets/3.png") {
      if (this.jogador == "jog1") {
        this.imagem5 = "../../assets/1.png";
        this.jogador = "jog2";
        this.campo_b2 = "jog1";
      } else if (this.jogador == "jog2") {
        this.imagem5 = "../../assets/2.png";
        this.jogador = "jog1";
        this.campo_b2 = "jog2";
      }
    }
    else if (index === 6 && this.imagem6 == "../../assets/3.png") {
      if (this.jogador == "jog1") {
        this.imagem6 = "../../assets/1.png";
        this.jogador = "jog2";
        this.campo_b3 = "jog1";
      } else if (this.jogador == "jog2") {
        this.imagem6 = "../../assets/2.png";
        this.jogador = "jog1";
        this.campo_b3 = "jog2";
      }
    }
    else if (index === 7 && this.imagem7 == "../../assets/3.png") {
      if (this.jogador == "jog1") {
        this.imagem7 = "../../assets/1.png";
        this.jogador = "jog2";
        this.campo_c1 = "jog1";
      } else if (this.jogador == "jog2") {
        this.imagem7 = "../../assets/2.png";
        this.jogador = "jog1";
        this.campo_c1 = "jog2";
      }
    }
    else if (index === 8 && this.imagem8 == "../../assets/3.png") {
      if (this.jogador == "jog1") {
        this.imagem8 = "../../assets/1.png";
        this.jogador = "jog2";
        this.campo_c2 = "jog1";
      } else if (this.jogador == "jog2") {
        this.imagem8 = "../../assets/2.png";
        this.jogador = "jog1";
        this.campo_c2 = "jog2";
      }
    }
    else if (index === 9 && this.imagem9 == "../../assets/3.png") {
      if (this.jogador == "jog1") {
        this.imagem9 = "../../assets/1.png";
        this.jogador = "jog2";
        this.campo_c3 = "jog1";
      } else if (this.jogador == "jog2") {
        this.imagem9 = "../../assets/2.png";
        this.jogador = "jog1";
        this.campo_c3 = "jog2";
      }
    }
    if ((this.campo_a1 == this.campo_b1 && this.campo_a1 == this.campo_c1) || (this.campo_a1 == this.campo_a2 && this.campo_a1 == this.campo_a3) || (this.campo_a1 == this.campo_b2 && this.campo_a1 == this.campo_c3) && this.campo_a1 != "") {
      if (this.campo_a1 == "jog1") {
        this.vencedor = "jog1";
        FP();
      } else if (this.campo_a1 == "jog2") {
        this.vencedor = "jog2";
        FZ();
      }
    }
    else if ((this.campo_b2 == this.campo_b1 && this.campo_b2 == this.campo_b3) || (this.campo_b2 == this.campo_a2 && this.campo_b2 == this.campo_c2) || (this.campo_b2 == this.campo_a3 && this.campo_b2 == this.campo_c1) && this.campo_b2 != "") {
      if (this.campo_b2 == "jog1") {
        this.vencedor = "jog1";
        FP();
      } else if (this.campo_b2 == "jog2") {
        this.vencedor = "jog2";
        FZ();
      }
    }
    else if ((this.campo_c3 == this.campo_c2 && this.campo_c3 == this.campo_c1) || (this.campo_c3 == this.campo_a3 && this.campo_c3 == this.campo_b3) && this.campo_c3 != "") {
      if (this.campo_c3 == "jog1") {
        this.vencedor = "jog1";
        FP();
      } else if (this.campo_c3 == "jog2") {
        this.vencedor = "jog2";
        FZ();
      }
    }
    else if(this.vencedor != "jog1" && this.vencedor != "jog2" && this.campo_a1 != "" && this.campo_a2 != "" && this.campo_a3 != "" && this.campo_b1 != "" && this.campo_b2 != "" && this.campo_b3 != "" && this.campo_c1 != "" && this.campo_c2 != "" && this.campo_c3 != ""){
      FV();
    }

    function FP() {
      setTimeout(function () {
        alert("Pica-Pau Venceu!!!");
      }, 50);
    }
    function FZ() {
      setTimeout(function () {
        alert("Zeca-Urubu Venceu!!!");
      }, 50);
    }
    function FV() {
      setTimeout(function () {
        alert("Deu velha!!!");
      }, 50);
    }
    this.jogadas.troca(this.jogador);
  }
  jogadas: JogadaService;
  constructor(jogada: JogadaService) {
    this.jogadas = jogada;
  }

  ngOnInit() {
    
    this.campo_a1 = "";
    this.campo_a2 = "";
    this.campo_a3 = "";
    this.campo_b1 = "";
    this.campo_b2 = "";
    this.campo_b3 = "";
    this.campo_c1 = "";
    this.campo_c2 = "";
    this.campo_c3 = "";

    this.imagem1 = "../../assets/3.png";
    this.imagem2 = "../../assets/3.png";
    this.imagem3 = "../../assets/3.png";
    this.imagem4 = "../../assets/3.png";
    this.imagem5 = "../../assets/3.png";
    this.imagem6 = "../../assets/3.png";
    this.imagem7 = "../../assets/3.png";
    this.imagem8 = "../../assets/3.png";
    this.imagem9 = "../../assets/3.png";
    this.jogador = "jog1";
    this.jogadas.troca(this.jogador);
  }
}
