import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ToastsManager} from "ng2-toastr";
import {NewsService} from "../../services/news.service";
import {Router} from "@angular/router";
import {AppSettings} from "../../app-settings";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    private busy:any;
    private createNewsForm:FormGroup;

    constructor(private fb:FormBuilder,
                private newsService:NewsService,
                public toastr:ToastsManager,
                vcr:ViewContainerRef,
                private router:Router) {

        this.toastr.setRootViewContainerRef(vcr);

        this.createNewsForm = this.fb.group({
            'title': [null, Validators.required],
            'body': [null, Validators.compose([Validators.required, Validators.minLength(40)])],
            'author': [null, Validators.required],
            'publishedOn': [null, Validators.compose([Validators.required, Validators.pattern('^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{4})$')])]
        });
    }

    ngOnInit() {
    }

    createNews(news) {
        this.busy = this.newsService.create(news).then((newsResp) => {
            if (newsResp.error) {
                this.toastr.error(newsResp.messages[0]);
            } else {
                this.router.navigate(['/list']);
            }
        }).catch(error => {
            console.error(error);
            this.toastr.error(AppSettings.API_COMMUNICATION_ERROR);
        });
    }
}
