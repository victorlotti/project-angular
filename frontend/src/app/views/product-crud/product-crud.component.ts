import { HeaderService } from './../../components/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private routers: Router, private headerService: HeaderService) { 
    headerService.headerModel.title = "Cadastro de produtos"
    headerService.headerModel.icon = "storefront"
    headerService.headerModel.router = "/products"
  }

  ngOnInit(): void {
  }

  navigateToProductCreate() {
    this.routers.navigate(["products/create"])
  }

  
  
}
