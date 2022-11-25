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
    {id: 3, nomeProduto: 'Teclado', codigoProduto: 303, quantidade: 3, codigoPedido: 3030, emissor: 'Vitor'},
    {id: 4, nomeProduto: 'Monitor', codigoProduto: 404, quantidade: 4, codigoPedido: 4040, emissor: 'Raul'},
    {id: 5, nomeProduto: 'Gabinete', codigoProduto: 505, quantidade: 5, codigoPedido: 5050, emissor: 'Nickolas'},
    {id: 6, nomeProduto: 'Processador', codigoProduto: 606, quantidade: 6, codigoPedido: 6060, emissor: 'Vinicius'},
    {id: 7, nomeProduto: 'Placa de Vídeo', codigoProduto: 707, quantidade: 7, codigoPedido: 7070, emissor: 'Matheus'},
    {id: 8, nomeProduto: 'Memória Ram', codigoProduto: 808, quantidade: 8, codigoPedido: 808, emissor: 'Mariana'},
    {id: 9, nomeProduto: 'Placa Mãe', codigoProduto: 909, quantidade: 9, codigoPedido: 9090, emissor: 'Victor'},
  ]
  displayedColumns = ['id', 'nomeProduto', 'codigoProduto', 'quantidade', 'codigoPedido', 'emissor']

  constructor() { }

  ngOnInit(): void {
  }

}
