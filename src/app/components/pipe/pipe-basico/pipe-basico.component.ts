import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-basico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-basico.component.html',
  styleUrl: './pipe-basico.component.scss'
})
export class PipeBasicoComponent {
  today = new Date();
}
