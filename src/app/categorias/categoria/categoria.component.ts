import { Categoria } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [
    { id: 1, marca: 'Sansung', categoria: 'eletrônico' },
    { id: 2, marca: 'Logitech', categoria: 'Periférico' },
    { id: 3, marca: 'Redragon', categoria: 'Periférico' },
    { id: 4, marca: 'HyperX', categoria: 'Periférico' },
    { id: 5, marca: 'Razer', categoria: 'Periférico' },
    { id: 6, marca: 'Delux', categoria: 'Periférico' },
    { id: 7, marca: 'Lenovo', categoria: 'eletrônico' },
    { id: 8, marca: 'Motorola', categoria: 'eletrônico' },
    { id: 9, marca: 'Fortrek', categoria: 'Periférico' },
  ];
  displayedColumns = ['id', 'marca', 'categoria'];
  constructor() {}

  ngOnInit(): void {}
}
