import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderSearchComponent } from './provider-search/provider-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/provider-search', pathMatch: 'full' },
  { path: 'provider-search',  component: ProviderSearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
