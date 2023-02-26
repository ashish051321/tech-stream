import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../constants';
import { Observable } from 'rxjs';


@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  public createPost(payload: any): Observable<any> {
    payload.operation = "CREATE POST";
    console.log(" =====> ====> ====> Callign getOwnCards", payload);
    return this.http.post(UrlConstants.AWS_LAMBDA_WRITE_API_URL , payload);
}

}
