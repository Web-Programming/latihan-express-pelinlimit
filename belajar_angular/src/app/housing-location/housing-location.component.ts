import { Component , Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> dfe606f30118a50a360760e73eab1cd4ed24355b

@Component({
  selector: 'app-housing-location',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <img class="listing-photo" [src]= "housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink] = "['details', housingLocation.id]">Show More</a>
=======
  imports: [CommonModule],
  template: `
    <section>
      <img class="listing-photo" src="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
>>>>>>> dfe606f30118a50a360760e73eab1cd4ed24355b
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
<<<<<<< HEAD
  @Input() housingLocation! : HousingLocation 
=======
  @Input() housingLocation! : HousingLocation
>>>>>>> dfe606f30118a50a360760e73eab1cd4ed24355b
}
