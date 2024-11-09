import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreServiceService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private categoriesUrl = 'https://fakestoreapi.com/products/categories';
  private cartUrl = 'https://fakestoreapi.com/carts';

  constructor(private http: HttpClient) {}

  // Obter todos os produtos
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obter um produto específico pelo ID
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Obter todas as categorias de produtos
  getProductCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriesUrl);
  }

  // Obter produtos por categoria
  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category/${category}`);
  }

  // Buscar produtos por limite
  getProductsLimit(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?limit=${limit}`);
  }

}
