import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private readonly apiUrl = 'http://rest-items.research.cloudonix.io/items';

    constructor(private http: HttpClient) {}

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}`);
    }

    public deleteProduct(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
