import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { DetailsComponent } from './shared/components/details/details.component';

export const routes: Routes = [
   {path:'' , redirectTo:'home' ,  pathMatch:'full'},

   {path:'home' , component:HomeComponent},
   {path:'details/:id' , component:DetailsComponent},
   {path:'**' , component:NotfoundComponent},
];
