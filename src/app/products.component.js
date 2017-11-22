"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProductsComponent = (function () {
    function ProductsComponent() {
        this.products = [
            { productId: 1, productName: 'Product 1', productPrice: 200 },
            { productId: 2, productName: 'Product 2', productPrice: 300 },
            { productId: 3, productName: 'Product 3', productPrice: 111 }
        ];
    }
    ProductsComponent.prototype.save = function () {
        this.products.push({ productId: this.id, productName: this.name, productPrice: this.price });
    };
    ProductsComponent.prototype.find = function () {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].productId == this.id) {
                this.name = this.products[i].productName;
                this.price = this.products[i].productPrice;
            }
        }
    };
    ProductsComponent.prototype.remove = function () {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].productId == this.id) {
                this.products.splice(i, 1);
            }
        }
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'my-products',
        templateUrl: './products.component.html'
    })
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map