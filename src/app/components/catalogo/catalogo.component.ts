import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogo } from 'src/app/models/catalogo';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  listCatalogos: Catalogo[] = [];
  
  constructor(private _catalogoService: CatalogoService){ }
  
  ngOnInit(): void {
      this.obtenerCatalogos();
  }

  obtenerCatalogos(){
    this._catalogoService.getCatalogos().subscribe(data => {
      console.log(data);
      this.listCatalogos = data;
    }, error => {
      console.log(error);
    })
  }
  
}
