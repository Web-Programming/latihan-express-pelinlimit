import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
<<<<<<< HEAD
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [ 
    { 
        path: '', 
        component: HomeComponent, 
        title : 'Home Page'
    },
    {
        path : 'details/:id',
        component :DetailsComponent,
        title : 'Details Page'
    }
 ];
=======

export const routes: Routes = [ { path: 'home', component: HomeComponent, title : 'Home Page'} ];
>>>>>>> dfe606f30118a50a360760e73eab1cd4ed24355b
