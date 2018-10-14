import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Routers
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { SuccessComponent } from './components/success/success.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // If no route, redirect to /principal
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'success', component: SuccessComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule, ],
  declarations: []
})
export class RoutingModule { }
