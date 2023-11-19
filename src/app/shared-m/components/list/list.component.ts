import { Component, OnChanges, OnInit } from '@angular/core';
import { Router,NavigationEnd, ActivatedRoute  } from '@angular/router';
import { Restaurant } from '../../model/interfaces';
import { ProcessesService } from '../../services/restaurants and hotels/processes.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  allDetails!: Restaurant[];
  type!: string;
  detailsForm!: FormGroup;
  filteredLocations!: Restaurant[];

  constructor(private route: Router, private service: ProcessesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.fetchData();
    })

    this.detailsForm = new FormGroup({
      searchField: new FormControl(null),
      cityField: new FormControl(null)
    })
  }

  onFormSubmit(value: any) {
    console.log(this.detailsForm.value);
    this.filteredLocations = this.allDetails.filter(
      item => ((item.name.toLowerCase().includes(this.detailsForm.value.searchField?.toLowerCase())) || 
      (item.description.toLowerCase().includes(this.detailsForm.value.searchField?.toLowerCase())) ||
      (item.location.city.toLowerCase().includes(this.detailsForm.value.searchField?.toLowerCase())) ||
      (item.location.state.toLowerCase().includes(this.detailsForm.value.searchField?.toLowerCase())) || 
      (item.location.streetAddress.toLowerCase().includes(this.detailsForm.value.searchField?.toLowerCase())) ||
      (item.location.city.toLowerCase().includes(this.detailsForm.value.cityField?.toLowerCase()))
    ))
  }

  fetchData() {
    if(this.route.url.indexOf("restaurants") > 0) {
      this.service.getAllRestaurants().subscribe((data) => {
        console.log(data);
        this.allDetails = data;
        this.type = "Restaurants";
        this.filteredLocations = data;
      });
    }
    else if(this.route.url.indexOf("hotels") > 0) {
      this.service.getAllHotels().subscribe((data)=> {
        this.allDetails = data;
        console.log(this.allDetails);
        this.type = "Hotels"
        this.filteredLocations = data;
      })
    }
  }
  
  viewDetails(restaurant: Restaurant) {
    this.route.navigate([`../details`], {state: {restaurant: restaurant}})
    // TODO
  }
}