import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Restaurant } from '../../model/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessesService } from '../../services/restaurants and hotels/processes.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})
export class ListDetailsComponent {
  itemId: string = '';
  images: String[] = [];
  itemDetails!: Restaurant;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProcessesService
  ) {
    this.itemDetails = history.state.restaurant;
  }
  ind = 0;

  goPrev() {
    this.ind =
      (this.itemDetails.images.length + (this.ind - 1)) %
      this.itemDetails.images.length;
    console.log(this.ind);
  }

  goNext() {
    this.ind = (this.ind + 1) % this.itemDetails.images.length;
    console.log(this.ind);
  }

  goToLink(link: string | undefined) {
    if (link) 
      window.open(link, '_blank');
  }

  payDetails(restaurant: Restaurant) {
    localStorage.setItem("restaurantPayment", JSON.stringify(restaurant));
    this.router.navigate([`../payment`])
  }
}
