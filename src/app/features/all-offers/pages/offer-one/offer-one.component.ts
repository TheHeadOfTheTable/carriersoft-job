import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-one',
  templateUrl: './offer-one.component.html',
  styleUrls: ['./offer-one.component.scss']
})
export class OfferOneComponent {
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
