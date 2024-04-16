import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitasComponent implements OnInit {
  citaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.citaForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fechaCita: ['', Validators.required],
      horaCita: ['', Validators.required],
      comentario: ['']
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.citaForm.valid) {
      // Envía el formulario o realiza otras acciones según sea necesario
      console.log(this.citaForm.value);
    } else {
      // Muestra mensajes de validación al usuario si es necesario
      this.markFormGroupTouched(this.citaForm);
    }
  }

  // Método auxiliar para marcar todos los controles del formulario como tocados
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
