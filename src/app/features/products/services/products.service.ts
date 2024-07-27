import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private readonly apiUrl = 'http://rest-items.research.cloudonix.io/items';

    constructor(private http: HttpClient) {}

    public getProducts() {
        return this.http.get(`${this.apiUrl}`);
    }
}
