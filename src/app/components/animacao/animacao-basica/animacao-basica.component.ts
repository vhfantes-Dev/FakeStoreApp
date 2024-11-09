import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animacao-basica',
  standalone: true,
  imports: [CommonModule],  // Importando CommonModule para diretivas como ngIf
  templateUrl: './animacao-basica.component.html',
  styleUrls: ['./animacao-basica.component.scss'],
  animations: [
    trigger('flyInOut', [
      // Estado "in" com a posição original do elemento
      state('in', style({ transform: 'translateX(0)' })),
      
      // Transição de "void" para qualquer estado ("*"), ou seja, quando o elemento entra
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),  // Começa fora da tela à esquerda
        animate('300ms')  // Anima em 300ms para a posição original
      ]),
      
      // Transição de qualquer estado ("*") para "void", ou seja, quando o elemento sai
      transition('* => void', [
        animate('300ms', style({ transform: 'translateX(100%)' }))  // Sai para a direita
      ]),
    ])
  ]
})
export class AnimacaoBasicaComponent {
  isVisible = true;

  toggleVisibility() {
    console.log('Alterando visibilidade:', this.isVisible);  // Log para depuração
    this.isVisible = !this.isVisible;
  }
}
