import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PilotComponent} from './pilot/pilot.component';

const routes: Routes = [
  {path:'pilot',component:PilotComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
