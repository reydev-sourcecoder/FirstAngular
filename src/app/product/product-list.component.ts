import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector : 'ba-products',
    templateUrl : './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent 
    implements OnInit{
 
    private _productService;
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    isShowImage: boolean = false;

    _listFilter:string;
    get listFilter() : string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? 
            this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[];
    filteredProducts: IProduct[];

    constructor(productService: ProductService) {
        this._productService = productService;
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    toggleImage(): void {
        this.isShowImage = !this.isShowImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.
        filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string):void {
        this.pageTitle = 'Product List ' + message;
    }
}