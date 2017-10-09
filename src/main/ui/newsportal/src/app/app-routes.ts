import {Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";

export const appRoutes:Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'list', component: ListPageComponent},
    {path: '**', redirectTo: 'app', pathMatch: 'full'}
];