import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dados-bi',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dados-bi.component.html',
  styleUrl: './dados-bi.component.scss'
})
export class DadosBiComponent {
  data: string = '';
}
