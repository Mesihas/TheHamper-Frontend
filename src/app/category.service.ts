import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class CategoryService {
    private catUrl = `http://localhost:4222/api/categories/`;

    constructor(private http: Http) { }

    getAllCategories() {
        return this.http.get(this.catUrl).map((response) => response.json());
    }

}

