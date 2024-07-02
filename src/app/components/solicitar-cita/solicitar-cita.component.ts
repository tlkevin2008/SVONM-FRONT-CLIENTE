import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/cita';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitasComponent implements OnInit {
  citaForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _citaService: CitaService
  ) {
    this.citaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^(?!\s)(?!.*\s{2}).{1,20}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,9}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S{1,19}$/)]],
      fecha: ['', Validators.required],
      tiempo: ['', Validators.required],
      comentario: ['']
    });
  }

  ngOnInit(): void {}

  agregarCita() {
    console.log(this.citaForm);

    if (this.citaForm.invalid) {
      return;
    }

    const CITA: Cita = {
      nombre: this.citaForm.get('nombre')?.value,
      telefono: this.citaForm.get('telefono')?.value,
      email: this.citaForm.get('email')?.value,
      fecha: this.citaForm.get('fecha')?.value,
      tiempo: this.citaForm.get('tiempo')?.value,
      comentario: this.citaForm.get('comentario')?.value,
    };

    console.log(CITA);

    this._citaService.guardarCita(CITA).subscribe(
      data => {
        this.toastr.success('La cita se realizó con éxito!', 'Cita realizada!');
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.citaForm.reset();
      }
    );
  }
}
