import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';
import { JogadorComponent } from './jogador/jogador.component';
import { CasaComponent } from './casa/casa.component';


@NgModule({
  declarations: [
    AppComponent,
    TabuleiroComponent,
    JogadorComponent,
    CasaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
