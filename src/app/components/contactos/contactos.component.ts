import { Component } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {

  formData = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  };

  constructor() { }

  submitForm() {
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Datos del formulario:', this.formData);
    // Por ejemplo, podrías enviar los datos a través de una solicitud HTTP
    // y luego restablecer el formulario
    // this.http.post('/api/contacto', this.formData).subscribe(() => {
    //   console.log('Formulario enviado con éxito');
    //   this.resetForm();
    // });
    // Para este ejemplo, solo imprimiremos los datos en la consola
    this.resetForm();
  }

  resetForm() {
    // Restablece los valores del formulario
    this.formData = {
      nombre: '',
      telefono: '',
      email: '',
      mensaje: ''
    };
  }
}
