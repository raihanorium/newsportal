import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routes";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
