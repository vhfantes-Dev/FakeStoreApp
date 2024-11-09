import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-basico.component.html',
  styleUrl: './form-basico.component.scss'
})
export class FormBasicoComponent {
  formExec: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formExec = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  onSubmit() {
    console.log(this.formExec.value);
  }
}
