export class Probador{
    _id?: number;
    imagen: string;

    constructor(imagen:string,_id?:number){
        this._id= _id;
        this.imagen= imagen;
        
    }
}