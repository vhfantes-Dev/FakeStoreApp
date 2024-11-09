import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-diretivos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dados-diretivos.component.html',
  styleUrl: './dados-diretivos.component.scss'
})
export class DadosDiretivosComponent {
  items = ['Item 1', 'Item 2', 'Item 3','Item 4', 'Item 5', 'Item 6'];
}
