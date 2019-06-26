import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class HttpService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers };

  public api: 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  public post(url, payload, options?): Promise<any> {
    return this.http
      .post(this.api + url, payload, {
        ...this.options,
        ...(options || {})
      })
      .toPromise();
  }

  public get(url, options?): Promise<any> {
    return this.http
      .get(this.api + url, {
        ...this.options,
        ...(options || {})
      })
      .toPromise();
  }

  public put(url, payload, options?): Promise<any> {
    return this.http
      .put(this.api + url, payload, {
        ...this.options,
        ...(options || {})
      })
      .toPromise();
  }

  public delete(url, options?): Promise<any> {
    return this.http
      .delete(this.api + url, { ...this.options, ...(options || {}) })
      .toPromise();
  }
}
