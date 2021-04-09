import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { PostsModel } from "./model/posts-model";
import { PostsService } from "./service/posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  reqData: any;
  resData: any;
  error: null;
  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  sendPostReq() {
    const postsModel = new PostsModel();
    postsModel.title = "Dummy Post";
    postsModel.desc = "Dummy Post for Test Desc";
    this.reqData = postsModel;
    this.postsService.createPosts(postsModel).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
        this.error = error.message;
      }
    );
  }

  getReq() {
    this.postsService.getPosts().subscribe(
      response => {
        this.resData = response;
      },
      error => {
        console.log(error);
        this.error = error.message;
      }
    );
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

*/
