import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostsModel } from './model/posts-model';
import { PostsService } from './service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  reqData: any;
  resData: any;
  error = false;
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.reqData = this.getPostModel();
  }

  sendPostReq() {
    this.postsService.createPosts(this.reqData).subscribe(
      response => {
        console.log(response);
      },
      error => {
        this.error = true;
      }
    );
  }

  getReq() {
    this.postsService.getPosts().subscribe(
      response => {
        this.resData = response;
      },
      error => {
        this.error = true;
      }
    );
  }

  getPostModel() {
    const postsModel = new PostsModel();
    postsModel.title = 'Dummy Post';
    postsModel.desc = 'Dummy Post for Test Desc';
    this.reqData = postsModel;
    return postsModel;
  }
}

/* 
firebase rules
{
  "rules": {
    ".read": "now < 1620496800000",  // 2021-5-9
    ".write": "now < 1620496800000",  // 2021-5-9
  }
}
https://console.firebase.google.com/project/ng-dev-firebase/database/ng-dev-firebase-default-rtdb/data

*/
