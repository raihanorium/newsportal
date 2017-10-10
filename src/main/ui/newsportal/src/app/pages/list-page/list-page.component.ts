import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news.service";
import {ViewContainerRef} from "@angular/core";
import {ToastsManager} from "ng2-toastr";
import {AppSettings} from "../../app-settings";

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
    private busy:any;
    private newsList:[any];

    constructor(private newsService:NewsService, public toastr:ToastsManager, vcr:ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.busy = this.newsService.getAllJson().then((newsList) => {
            if (newsList.error) {
                this.toastr.error(newsList.messages[0]);
            } else {
                this.newsList = newsList.data;
            }
        }).catch(error => {
            console.error(error);
            this.toastr.error(AppSettings.API_COMMUNICATION_ERROR);
        });
    }

}
