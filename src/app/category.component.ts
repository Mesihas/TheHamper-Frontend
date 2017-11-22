import { OnInit, Component } from '@angular/core';
import { Category } from './category';
import { Hamper } from './hamper';
import { CategoryService } from './category.service';
import { HamperService } from './hamper.service';
@Component({
    selector: 'my-calculator',
    templateUrl: './category.component.html', 
    styles: [ '../node_modules/bootstrap/dist/css/bootstrap.min.css'],       
    providers: [CategoryService, HamperService]
})

export class CategoryComponent implements OnInit {
    categories: Category[];
    hampers: Hamper[];
    catName: string;

    constructor(private _categoriesService: CategoryService,
                private _hamperService: HamperService ) { }

    ngOnInit() {
        this._categoriesService.getAllCategories().subscribe(result =>
        { this.categories = result; });
        this.catName = 'All Categories';
        this.displayHamper();
    }

    displayHamper(): void {

        this._hamperService.getAllHamperByCategory(this.catName).subscribe(result =>
        { this.hampers = result; });

    }
}