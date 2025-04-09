import { Product } from 'src/app/views/product-crud/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  
  product: Product = {
    id: undefined,
    name: "",
    preco: null
  }

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(products => {
    this.product = products
   })
  }
  
  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.alertForSaveProduct("Produto deletado com sucesso!")
      this.router.navigate(["/products"])
    })
  }

  navigateToHome(): void {
    this.router.navigate(["/products"])
  }

}
