import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostsModel } from '../model/posts-model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  createPosts(postsModel: PostsModel) {
    // Adding query Params into requests
    let params = new HttpParams();
    params = params.append('dataType', 'Test');
    params = params.append('roleType', 'ADMIN');

    return this.httpClient.post(
      'https://ng-dev-firebase-default-rtdb.firebaseio.com/posts.json',
      postsModel,
      {
        // Add request header
        headers: new HttpHeaders({
          'Custom-Header': 'Test'
        }),

        // query params
        params: params,

        // observe response (response will give all content , *** ('body','events') can also be used.
        observe: 'response',

        // response type
        responseType: 'json'
      }
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

        // query params
        params: params,

        // response type
        responseType: 'json'
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

  deletePosts() {
    return this.httpClient.delete(
      'https://ng-dev-firebase-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'body'
      }
    );
  }
}
