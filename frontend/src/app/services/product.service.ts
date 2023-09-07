import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  getProductList(currentCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/products/search/findByCategoryId?id=${currentCategoryId}`
    return this.getProducts(searchUrl)
  }

  getProductListPagination(thePage: number,
                            thePageSize: number, theCategoryId: number): Observable<GetResponseProduct> {
    const searchUrl = `${this.baseUrl}/products/search/findByCategoryId?id=${theCategoryId}`
                      + `&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProduct>(searchUrl);
  }

  searchProducts(theKeyword: string) {
    console.log("keyword is"+" "+theKeyword);
    
    const searchUrl = `${this.baseUrl}/products/search/findByNameContaining?name=${theKeyword}`
    return this.getProducts(searchUrl)
  }

  searchProductsPagination(thePage: number,
                            thePageSize: number, 
                            theKeyword: string): Observable<GetResponseProduct> {
const searchUrl = `${this.baseUrl}/products/search/findByNameContaining?name=${theKeyword}`
                  + `&page=${thePage}&size=${thePageSize}`;

return this.httpClient.get<GetResponseProduct>(searchUrl);
}

  getProductCategories(): Observable<ProductCategory[]> {
    const categoryUrl = `${this.baseUrl}/product-category`;
    return this.httpClient.get<GetResponseProductCategory>(categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    )
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/products/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

}

interface GetResponseProduct {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
