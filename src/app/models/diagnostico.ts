export class Diagnostico{
    _id?: number;
    fila: string;
    malestar: string;
    procedimiento: string;

    constructor(mensaje:string, procedimiento: string, malestar: string, fila: string, _id?: number) {
        this._id = _id;
        this.fila = fila;
        this.malestar = malestar;
        this.procedimiento = procedimiento;
    }
}