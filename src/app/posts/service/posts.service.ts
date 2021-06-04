import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostsModel } from '../model/posts-model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  createPosts(postsModel: PostsModel) {
    return this.httpClient.post(
      'https://ng-dev-firebase-default-rtdb.firebaseio.com/posts.json',
      postsModel
    );
  }

  getPosts() {
    // Adding query Params
    let params = new HttpParams();
    params = params.append('dataType', 'Test');
    params = params.append('roleType', 'ADMIN');

    return this.httpClient
      .get('https://ng-dev-firebase-default-rtdb.firebaseio.com/posts.json', {
        // Add request header
        headers: new HttpHeaders({
          'Custom-Header': 'Test'
        }),
        params: params
      })
      .pipe(
        map(response => {
          const dataArr = [];
          for (const key in response) {
            dataArr.push(response[key]);
          }
          return dataArr;
        })
      );
  }
}
