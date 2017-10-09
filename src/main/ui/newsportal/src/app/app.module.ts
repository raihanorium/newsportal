import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routes";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewsService} from "./services/news.service";
import {HttpModule} from "@angular/http";
import "rxjs/Rx";

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        NavbarComponent,
        ListPageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [NewsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
