import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/views/product-crud/product.model';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {

  product: Product = {
    id: undefined,
    name: "",
    preco: null
  }
  

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")
    this.productService.readById(id).subscribe(products => {
      this.product = products
    });
   }
  
   updateProduct(): void {
    this.productService.update(this.product).subscribe(products => {
      this.productService.alertForSaveProduct("Produto atualizado!"); 
      this.router.navigate(["/products"]);
    })
  }

  navigateToHome() {
    this.router.navigate(["/products"])
  }
}