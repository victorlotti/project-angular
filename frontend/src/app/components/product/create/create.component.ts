import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/views/product-crud/product.model';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = {
    id: undefined,
    name: "",
    preco: null
    
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  
  navigateToHome() {
    this.router.navigate(["/products"])
  }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.alertForSaveProduct("Produto adicionado!")
      this.router.navigate(["products"])
    })
  }

} 
