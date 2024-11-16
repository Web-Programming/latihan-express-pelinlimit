<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
>>>>>>> dfe606f30118a50a360760e73eab1cd4ed24355b

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
<<<<<<< HEAD
  housingLocationList: HousingLocation[] = [];
  HousingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.HousingService.getAllHousingLocations();
  }
=======
  housingLocationList: HousingLocation[] = [
    {
      id : 0,
      name : "Citra Grand City",
      city : "Palembang",
      state : "indonesia",
      photo : "https://static-id.lamudi.com/static/media/bm9uZS9ub25l/1000x620/8d2d212e30667b.jpg",
      availableUnits : 12,
      wifi : true,
      laundry : true,
    },
    {
      id : 1,
      name : "Citra Land",
      city : "Palembang",
      state : "indonesia",
      photo : "https://incomerealty.id/wp-content/uploads/2023/12/DIJUAL-RUMAH-TROPICAL-VALLEY-CGC-PALEMBANG-1.jpg",
      availableUnits : 14,
      wifi : true,
      laundry : true,
    }
  ];
>>>>>>> dfe606f30118a50a360760e73eab1cd4ed24355b
}

