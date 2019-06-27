import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers };

  constructor(private http: HttpClient) {}

  public post(url, payload, options?): Promise<any> {
    return this.http
      .post('http://localhost:3000/test-api/' + url, payload, {
        ...this.options,
        ...(options || {})
      })
      .toPromise();
  }

  public get(url, options?): Promise<any> {
    return this.http
      .get('http://localhost:3000/test-api/' + url, {
        ...this.options,
        ...(options || {})
      })
      .toPromise();
  }

  public put(url, payload, options?): Promise<any> {
    return this.http
      .put('http://localhost:3000/test-api/' + url, payload, {
        ...this.options,
        ...(options || {})
      })
      .toPromise();
  }

  public delete(url, options?): Promise<any> {
    return this.http
      .delete('http://localhost:3000/test-api/' + url, { ...this.options, ...(options || {}) })
      .toPromise();
  }
}
