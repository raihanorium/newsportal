import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {AppSettings} from "../app-settings";

@Injectable()
export class NewsService {

    constructor(private http:Http) {
    }

    public getAllJson() {
        var headers = new Headers();
        headers.append("Accept", 'application/json');

        return this.http.get(AppSettings.API_BASE + '/story', {headers: headers})
            .map((resp:Response) => {
                return resp.json();
            })
            .toPromise()
            .catch((error:Response) => {
                throw(error)
            });
    }

}
