import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesafiandoGigantesPage } from './desafiando-gigantes.page';

const routes: Routes = [
  {
    path: '',
    component: DesafiandoGigantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafiandoGigantesPageRoutingModule {}
