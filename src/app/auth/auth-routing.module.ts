import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {
    path: '',
    children: [
    {
    path: 'login',
    component: LoginComponent,
    },

    {
      path: 'registro',
      component: LoginComponent,
    },

    {
      path: '**',
      redirectTo: 'login',
    },
    
  
    ]
  }  
]


@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
