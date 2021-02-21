import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('http://api.plos.org/search?q=title:DNA');
  }

  postData(payload: any): Observable<any> {
    return this.http.post('', payload);
  }
}
