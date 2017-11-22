"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var category_servise_1 = require("./category.servise");
var CategoryComponent = (function () {
    function CategoryComponent(_categoriesService) {
        this._categoriesService = _categoriesService;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoriesService.getAllCategories().subscribe(function (result) { _this.categories = result; });
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    core_1.Component({
        selector: 'my-calculator',
        template: "\n                <h4>Search Hamperby Category </h4>\n                <h4 id=\"h1-power\">My Categories Table</h4>\n                <div>\n                    <table id='background-image'>\n                        <thead>\n                            <tr>\n                                <th>category ID</th>\n                                <th>name </th>                             \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let c of categories\">\n                                <td>{{c.categoryId}} </td>\n                                <td>{{c.name}} </td>            \n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n              ",
        providers: [category_servise_1.CategoryService]
    }),
    __metadata("design:paramtypes", [category_servise_1.CategoryService])
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=calculator.component.js.map