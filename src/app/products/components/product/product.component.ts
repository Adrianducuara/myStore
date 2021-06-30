import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChange, 
    OnInit, 
    DoCheck, 
    OnDestroy } 
    from '@angular/core';

import { Product } from '../../../product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy{
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('constructor');
    }

    /* ngOnChanges(changes: SimpleChange){
       console.log('ngOnChanges');
       console.log(changes);
    } */

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngDoCheck() {
        console.log('DoCheck');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    addCart() {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }



}