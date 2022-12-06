export interface Produto{
  id: number;
  nomeProduto: string;
  codigoProduto: number;
  quantidade: number;
  codigoPedido: number;
  emissor: string;
};

export interface Categoria{
  id: number;
  marca: string;
  categoria: string;
};
