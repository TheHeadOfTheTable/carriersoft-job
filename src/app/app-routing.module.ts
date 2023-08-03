import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { LoginComponent } from './features-main/auth/pages/login/login.component';
import { RegisterComponent } from './features-main/auth/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,

  },
  {
    path: 'offer',
    component: LayoutComponent,
    loadChildren: () => import('./features/all-offers/all-offers.module').then(m => m.AllOffersModule)
  },
  {
    path: 'contact',
    component: LayoutComponent,
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'how-do',
    component: LayoutComponent,
    loadChildren: () => import('./features/how-do/how-do.module').then(m => m.HowDoModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
