import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListPageComponent } from './pages/offers-list/offer-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OfferOneComponent } from './pages/offer-one/offer-one.component';


const routes: Routes = [
  {
    path: '',
    component: OfferListPageComponent
  },
  {
    path: 'one',
    component: OfferOneComponent
  }

];


@NgModule({
  declarations: [
    OfferListPageComponent,
    OfferOneComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AllOffersModule { }
