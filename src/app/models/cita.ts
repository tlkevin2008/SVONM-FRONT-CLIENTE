export class Cita {
    _id?: number;
    nombre: string;
    telefono: number;
    email: string;
    fecha: string;
    tiempo: string;
    comentario: string;

    constructor(comentario:string, nombre: string, telefono: number, email: string, fecha: string, tiempo: string, _id?: number) {
        this._id = _id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.fecha = fecha;
        this.tiempo = tiempo;
        this.comentario = comentario;
    }
}