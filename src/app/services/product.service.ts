import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../services/product';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}

  getProduct() {
    // Make the HTTP request:
    return this.http.get<Product[]>('http://api.hbc.in.th/api/product', {
      responseType: 'json',
      reportProgress: true,
    });
  }
}
