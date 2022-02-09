import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AProvaDeFogoPageRoutingModule } from './a-prova-de-fogo-routing.module';

import { AProvaDeFogoPage } from './a-prova-de-fogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AProvaDeFogoPageRoutingModule
  ],
  declarations: [AProvaDeFogoPage]
})
export class AProvaDeFogoPageModule {}
