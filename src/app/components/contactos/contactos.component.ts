import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit{
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _contactoService: ContactoService) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      mensaje: ['', Validators.required],
    })
   }

  ngOnInit(): void {
      
  }

  agregarContacto(){

    const CONTACTO: Contacto ={
      nombre: this.contactoForm.get('nombre')?.value,
      telefono: this.contactoForm.get('telefono')?.value,
      email: this.contactoForm.get('email')?.value,
      mensaje: this.contactoForm.get('mensaje')?.value,
    }

    console.log(CONTACTO);
    this._contactoService.guardarContacto(CONTACTO).subscribe(data => {
      this.toastr.success('El contacto fue realizado con exito!', 'Contacto Enviado!');
      this.router.navigate(['/'])
    }, error => {
      console.log(error);
      this.contactoForm.reset();
    })
  }
}
