import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

    constructor(private newsService:NewsService) {
    }

    ngOnInit() {
        this.newsService.getAllJson().then((newsList) => {
            console.log(newsList);
        }).catch(error => {
            console.error(error);
        });
    }

}
