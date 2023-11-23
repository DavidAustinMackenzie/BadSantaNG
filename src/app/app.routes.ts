import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrawComponent } from './draw/draw.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'draw', component: DrawComponent}
];
