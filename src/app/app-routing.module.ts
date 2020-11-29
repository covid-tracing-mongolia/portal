import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CovidGenerateKeyComponent} from './covid-generate-key/covid-generate-key.component';

const routes: Routes = [
  { path: '', redirectTo: '/covid', pathMatch: 'full' },
  { path: 'covid', component: CovidGenerateKeyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
