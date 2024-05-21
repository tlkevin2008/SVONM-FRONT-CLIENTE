export class Contacto{
    _id?: number;
    nombre: string;
    telefono: number;
    email: string;
    mensaje: string;

    constructor(mensaje:string, email: string, telefono: number, nombre: string, _id?: number) {
        this._id = _id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.mensaje = mensaje;
    }
}