import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
