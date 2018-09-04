import { Component, OnInit } from '@angular/core';
import { RestaurantService} from "../../core/services/restaurant.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public allData = {};

  constructor(private restaurantService: RestaurantService) {
    this.findMe();
    this.restaurantInformation();
  }

  ngOnInit() {
  }

  restaurantInformation() {
    this.allData = this.restaurantService.getRestaurant();
  }

  findMe() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
}
