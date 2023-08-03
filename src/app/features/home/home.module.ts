import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';
import { PartnerComponent } from './components/partner/partner.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: HomePagesComponent
  },

];

@NgModule({
  declarations: [
    HomePagesComponent,
    PresentationComponent,
    PartnerComponent,
    OpportunitiesComponent,
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ]
})
export class HomeModule { }
