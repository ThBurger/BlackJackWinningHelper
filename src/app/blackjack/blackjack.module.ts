import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackjackPageRoutingModule } from './blackjack-routing.module';

import { BlackjackPage } from './blackjack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackjackPageRoutingModule
  ],
  declarations: [BlackjackPage]
})
export class BlackjackPageModule {}
