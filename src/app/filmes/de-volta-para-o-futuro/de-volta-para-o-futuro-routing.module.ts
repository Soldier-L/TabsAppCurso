import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeVoltaParaOFuturoPage } from './de-volta-para-o-futuro.page';

const routes: Routes = [
  {
    path: '',
    component: DeVoltaParaOFuturoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeVoltaParaOFuturoPageRoutingModule {}
