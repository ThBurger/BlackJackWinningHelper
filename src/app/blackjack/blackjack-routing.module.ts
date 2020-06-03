import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlackjackPage } from './blackjack.page';

const routes: Routes = [
  {
    path: '',
    component: BlackjackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlackjackPageRoutingModule {}
