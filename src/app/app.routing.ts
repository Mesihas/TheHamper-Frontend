import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent } from './category.component';

const appRoutes: Routes = [

    {
        path: 'Category',
        component: CategoryComponent
    },
    {
        path: '**', //
        component: CategoryComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);