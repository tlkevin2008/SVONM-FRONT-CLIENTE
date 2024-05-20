import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitasComponent implements OnInit {
  citaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.citaForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fecha: ['', Validators.required],
      tiempo: ['', Validators.required],
      comentario: ['']
    });
  }

  ngOnInit(): void {
  }

  agregarCita(){
    console.log(this.citaForm)

    console.log(this.citaForm.get('cita')?.value);

    const CITA: Cita ={
      nombre: this.citaForm.get('nombre')?.value,
      telefono: this.citaForm.get('telefono')?.value,
      email: this.citaForm.get('email')?.value,
      fecha: this.citaForm.get('fecha')?.value,
      tiempo: this.citaForm.get('tiempo')?.value,
      comentario: this.citaForm.get('comentario')?.value,
    }

    console.log(CITA);
    this.toastr.success('La cita se realizo con exito!', 'Cita realizada!');
    this.router.navigate(['/']);
  }
}
