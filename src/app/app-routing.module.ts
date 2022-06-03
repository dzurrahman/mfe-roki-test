import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular13',
    loadChildren: () => import('./angular13.module').then( m => m.Angular13Module )
  },
  {
    path: '',
    redirectTo: 'angular13/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
