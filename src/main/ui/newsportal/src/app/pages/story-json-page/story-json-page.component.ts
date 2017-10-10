import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../services/news.service";
import {ToastsManager} from "ng2-toastr";
import {AppSettings} from "../../app-settings";

@Component({
    selector: 'app-story-json-page',
    templateUrl: './story-json-page.component.html',
    styleUrls: ['./story-json-page.component.css']
})
export class StoryJsonPageComponent implements OnInit {
    id:number;
    private sub:any;
    private busy:any;
    private story:any;

    constructor(private route:ActivatedRoute,
                private newsService:NewsService,
                public toastr:ToastsManager,
                vcr:ViewContainerRef) {

        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            this.busy = this.newsService.getJson(this.id).then((storyResp) => {
                if (storyResp.error) {
                    this.toastr.error(storyResp.messages[0]);
                } else {
                    this.story = storyResp.data[0];
                }
            }).catch(error => {
                console.error(error);
                this.toastr.error(AppSettings.API_COMMUNICATION_ERROR);
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
