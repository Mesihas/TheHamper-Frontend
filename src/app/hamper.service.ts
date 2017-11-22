import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class HamperService {
    private hampUrl = `http://localhost:4222/api/products?catName=`;

    constructor(private http: Http) { }

    getAllHamperByCategory(catName: string) {
        return this.http.get(this.hampUrl + catName).map((response) => response.json());
    }

}

