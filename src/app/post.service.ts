import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostService {

  result:any;

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get("/api/posts")
      .map(result => this.result = result.json());
  }

  getPost(id) {
    return this._http.get("/api/details/"+id)
      .map(result => result.json());
  }

  insertPost(post: Post) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('/api/posts', JSON.stringify(post), options)
      .map((response: Response) => response.json());
  }

}
