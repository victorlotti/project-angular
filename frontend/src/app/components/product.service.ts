import { Product } from 'src/app/views/product-crud/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { catchError, last, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  targetUrl = "http://localhost:3001/products"
  
  constructor(private snack: MatSnackBar, private https: HttpClient) { }
 
  alertForSaveProduct(msg: string, isError: boolean = false): void {
    this.snack.open(msg, 'X', {
       duration: 3000,
       horizontalPosition: 'right',
       verticalPosition: "top",
       panelClass: isError ? ["msg-error"] : ["msg-sucess"]
      },
    )
  }

  createProduct(product: Product): Observable<Product> {
    // 1. Primeiro, buscamos todos os produtos para pegar o maior id
   return this.https.get<Product[]>(this.targetUrl).pipe(map(products => {
     // 2. Após pegar todos os produtos, encontramos o último id
      let lastProduct = products[products.length - 1];
      let lastId = lastProduct.id ?? "0"; // Se não houver produtos, começa com id 0
      product.id = (parseInt(lastId) + 1) + "" // Atribui o id + 1 ao novo produto
      return product
   }),
   // 2. Depois de modificar o id, criamos o novo produto no servidor
   switchMap(updatedProject => {
    return this.https.post<Product>(this.targetUrl, updatedProject).pipe(map(obj => obj),
    catchError(e => this.errorHandler(e)))
  })
 );
}

  errorHandler(e: any): Observable<any> {
    this.alertForSaveProduct("Ocorreu um erro!", true)
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.https.get<Product[]>(this.targetUrl)
  }

  readById(id: string | null): Observable<Product>{
    let url = this.targetUrl + "/" + id
    return this.https.get<Product>(url)
  }
  
  update(product: Product): Observable<Product> {
    let url = this.targetUrl + "/" + product.id
    return this.https.put<Product>(url, product)
  }

  delete(id: string | undefined): Observable<Product> {
    let url = this.targetUrl + "/" + id
    return this.https.delete<Product>(url)
  }

}
