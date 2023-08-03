import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-offers-page',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListPageComponent {
  url: string;
  constructor(private router: Router) {
    this.url = this.router.url
  }

  /**
   * open url
   * @param url open url
   */
  openUrl(url: string) {
    this.router.navigateByUrl(url).then();
  }
}
