import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    private createNewsForm:FormGroup;

    constructor(private fb:FormBuilder) {
        this.createNewsForm = this.fb.group({
            'title': [null, Validators.required],
            'body': [null, Validators.compose([Validators.required, Validators.minLength(40)])],
            'author': [null, Validators.required]
        });
    }

    ngOnInit() {
    }

    createNews(news) {
        console.log(news);
    }
}
