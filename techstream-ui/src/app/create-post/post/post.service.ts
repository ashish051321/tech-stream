import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlConstants } from '../constants';
import { Observable } from 'rxjs';



@Injectable()
export class PostService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public createPost(payload: any): Observable<any> {
    payload.operation = "CREATE POST";
    return this.http.post(UrlConstants.AWS_LAMBDA_WRITE_API_URL, payload, this.httpOptions);
  }

}
