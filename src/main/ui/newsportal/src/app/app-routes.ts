import {Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";
import {StoryHtmlPageComponent} from "./pages/story-html-page/story-html-page.component";
import {StoryJsonPageComponent} from "./pages/story-json-page/story-json-page.component";
import {StoryXmlPageComponent} from "./pages/story-xml-page/story-xml-page.component";

export const appRoutes:Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'list', component: ListPageComponent},
    {path: 'story/html/:id', component: StoryHtmlPageComponent},
    {path: 'story/json/:id', component: StoryJsonPageComponent},
    {path: 'story/xml/:id', component: StoryXmlPageComponent},
    {path: '**', redirectTo: 'app', pathMatch: 'full'}
];