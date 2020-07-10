import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatethisappPageRoutingModule } from './ratethisapp-routing.module';

import { RatethisappPage } from './ratethisapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatethisappPageRoutingModule
  ],
  declarations: [RatethisappPage]
})
export class RatethisappPageModule {}
