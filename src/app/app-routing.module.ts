import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'rambo',
    loadChildren: () => import('./filmes/rambo/rambo.module').then( m => m.RamboPageModule)
  },
  {
    path: 'de-volta-para-o-futuro',
    loadChildren: () => import('./filmes/de-volta-para-o-futuro/de-volta-para-o-futuro.module').then( m => m.DeVoltaParaOFuturoPageModule)
  },
  {
    path: 'desafiando-gigantes',
    loadChildren: () => import('./filmes/desafiando-gigantes/desafiando-gigantes.module').then( m => m.DesafiandoGigantesPageModule)
  },
  {
    path: 'a-prova-de-fogo',
    loadChildren: () => import('./filmes/a-prova-de-fogo/a-prova-de-fogo.module').then( m => m.AProvaDeFogoPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
