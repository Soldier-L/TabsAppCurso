import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeVoltaParaOFuturoPageRoutingModule } from './de-volta-para-o-futuro-routing.module';

import { DeVoltaParaOFuturoPage } from './de-volta-para-o-futuro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeVoltaParaOFuturoPageRoutingModule
  ],
  declarations: [DeVoltaParaOFuturoPage]
})
export class DeVoltaParaOFuturoPageModule {}
