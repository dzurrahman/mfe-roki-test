import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestModule)
  },
  {
    path: '',
    redirectTo: 'angular13/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular13RoutingModule { }
