import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowDoPageComponent } from './pages/how-do-page/how-do-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HowDoPageComponent
  },

];


@NgModule({
  declarations: [
    HowDoPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HowDoModule { }
