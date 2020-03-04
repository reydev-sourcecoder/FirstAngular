import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  errorMessage:string;
  pageTitle:string = 'Product Detail';
  product: IProduct;
  Id:number;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.Id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.Id)
        .subscribe({
          next: data => this.product = data,
          error: err => {
            this.errorMessage = err;
            alert(this.errorMessage);
          }
        });
  }

  OnBack(): void {
    this.router.navigate(['/product']);
  }

}
