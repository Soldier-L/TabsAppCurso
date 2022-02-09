import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesafiandoGigantesPageRoutingModule } from './desafiando-gigantes-routing.module';

import { DesafiandoGigantesPage } from './desafiando-gigantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesafiandoGigantesPageRoutingModule
  ],
  declarations: [DesafiandoGigantesPage]
})
export class DesafiandoGigantesPageModule {}
