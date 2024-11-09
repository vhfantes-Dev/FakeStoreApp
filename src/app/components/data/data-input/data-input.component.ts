import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-input',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './data-input.component.html',
  styleUrl: './data-input.component.scss'
})
export class DataInputComponent {
  @Output() dataEntered = new EventEmitter<string>();

  submitData(value: string) {
    this.dataEntered.emit(value);
  }
}
