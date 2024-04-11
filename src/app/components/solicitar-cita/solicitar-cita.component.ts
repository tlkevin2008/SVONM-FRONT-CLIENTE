import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitasComponent implements OnInit {
  citaForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private modalService: NgbModal // Agrega NgbModal al constructor
  ) {
    this.citaForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      fechaCita: ['', Validators.required],
      horaCita: ['', Validators.required],
      comentario: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  // Nuevo método para abrir el modal
  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // Manejar el cierre del modal si es necesario
    }, (reason) => {
      // Manejar el descarte del modal si es necesario
    });
  }

}
