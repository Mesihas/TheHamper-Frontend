"use strict";
var router_1 = require("@angular/router");
var category_component_1 = require("./category.component");
var appRoutes = [
    {
        path: 'Category',
        component: category_component_1.CategoryComponent
    },
    {
        path: '**',
        component: category_component_1.CategoryComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map