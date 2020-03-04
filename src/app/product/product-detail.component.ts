import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string = 'Product Detail';
  product: IProduct;
  Id:number;

  constructor(private route: ActivatedRoute, 
    private productService: ProductService) { }

  ngOnInit(): void {
    let products:IProduct[];
    this.Id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts()
          .subscribe(data => {
            products = data;
            this.product = products.find(p => p.productId == this.Id);
          });

  }

}
