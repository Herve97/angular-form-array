import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck {
  productdata: any;
  islisting = true;
  displayColums: string[] = ['code', 'name', 'price', 'remarks', 'action'];

  constructor(private services: ProductService, private router: Router) {}

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl == '/product') {
      this.islisting = true;
    } else {
      this.islisting = false;
    }
  }

  ngOnInit(): void {
    this.LoadProduct();
    this.services.Refreshrequired.subscribe((item) => {
      this.LoadProduct();
    });
  }

  EditProduct(code: any) {
    this.router.navigate(['product/edit/' + code]);
  }

  LoadProduct() {
    this.services.GetAllProducts().subscribe((resp) => {
      this.productdata = resp;
    });
  }
}
