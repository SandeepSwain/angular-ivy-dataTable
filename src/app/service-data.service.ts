import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tableList } from './service-list';

@Injectable({
  providedIn: 'root',
})
export class ServiceDataService {
  private url =
    'https://www.json-generator.com/api/json/get/cgqmjhLSjS?indent=2';
  constructor(private http: HttpClient) {}
  getdataTable(): Observable<tableList[]> {
    return this.http.get<tableList[]>(this.url);
  }
}
