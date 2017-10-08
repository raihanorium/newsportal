import {Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";

export const appRoutes:Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: '**', redirectTo: 'app', pathMatch: 'full'}
];