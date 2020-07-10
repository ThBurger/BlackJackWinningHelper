import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatethisappPage } from './ratethisapp.page';

const routes: Routes = [
  {
    path: '',
    component: RatethisappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatethisappPageRoutingModule {}
