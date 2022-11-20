import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [
    {id: 1, nomeProduto: 'Notbook', codigoProduto: 101, quantidade: 1, codigoPedido: 1010, emissor: 'João'},
    {id: 2, nomeProduto: 'Mouse', codigoProduto: 202, quantidade: 2, codigoPedido: 2020, emissor: 'Pedro'},
    {id: 3, nomeProduto: 'Teclado', codigoProduto: 203, quantidade: 3, codigoPedido: 3030, emissor: 'Vitor'},
  ]
  displayedColumns = ['id', 'nomeProduto', 'codigoProduto', 'quantidade', 'codigoPedido', 'emissor']

  constructor() { }

  ngOnInit(): void {
  }

}
