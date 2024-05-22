export class Catalogo {
  _id?: number;
  nombre: String;
  precio: String;
  marca: String;
  codigo: String;
  tipoProducto: String;
  imagen: String;

  constructor(
    nombre: String,
    precio: String,
    marca: String,
    codigo: String,
    tipoProducto: String,
    imagen: String
  ) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.codigo = codigo;
    this.tipoProducto = tipoProducto;
    this.imagen = imagen;
  }
}
