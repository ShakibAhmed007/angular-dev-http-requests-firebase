import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { TestRequestModel } from "./model/test-request";

@Component({
  selector: "app-test-requests",
  templateUrl: "./test-requests.component.html",
  styleUrls: ["./test-requests.component.css"]
})
export class TestRequestsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  sendPostReq() {
    const testRequestModel = new TestRequestModel();
    testRequestModel.requestVersion = "0.11.1";
    testRequestModel.requestFrom = "https://stackblitz.com";
    console.log(testRequestModel);

    this.httpClient
      .post(
        "https://ng-dev-firebase-default-rtdb.firebaseio.com/posts.json",
        testRequestModel
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}
