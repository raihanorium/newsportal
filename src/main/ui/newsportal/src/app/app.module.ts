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
import {ToastModule} from "ng2-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BusyModule} from "angular2-busy";
import { StoryHtmlPageComponent } from './pages/story-html-page/story-html-page.component';
import { StoryJsonPageComponent } from './pages/story-json-page/story-json-page.component';
import { StoryXmlPageComponent } from './pages/story-xml-page/story-xml-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        NavbarComponent,
        ListPageComponent,
        StoryHtmlPageComponent,
        StoryJsonPageComponent,
        StoryXmlPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ToastModule.forRoot(),
        BusyModule
    ],
    providers: [NewsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
