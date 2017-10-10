import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../services/news.service";
import {ToastsManager} from "ng2-toastr";
import {AppSettings} from "../../app-settings";
import * as $ from 'jQuery';

@Component({
    selector: 'app-story-xml-page',
    templateUrl: './story-xml-page.component.html',
    styleUrls: ['./story-xml-page.component.css']
})
export class StoryXmlPageComponent implements OnInit {
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

            this.busy = this.newsService.getXml(this.id).then((storyResp) => {
                let $xml = $($.parseXML(storyResp.text()));
                let $story = $xml.find('restResponse content data')[0];
                this.story = new XMLSerializer().serializeToString($story);
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
