import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

const router: Routes = [
    {
        path: '',
        component: ProductsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(router),
    ],
    exports: [
        RouterModule
    ]
})

export class ProductsRoutingModule {}