import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // getProduct(): Observable<any> {
  //   const apiUrl = 'https://fakestoreapi.com/products';
  //   return this.http.get<any>(apiUrl).pipe(map((res: any) => res));
  // }

  getProduct() {
    return this.http.get<any>('https://fakestoreapi.com/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
