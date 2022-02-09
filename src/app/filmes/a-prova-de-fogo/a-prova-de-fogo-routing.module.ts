import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AProvaDeFogoPage } from './a-prova-de-fogo.page';

const routes: Routes = [
  {
    path: '',
    component: AProvaDeFogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AProvaDeFogoPageRoutingModule {}
