import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }, 
    {
      path: '',
      loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
