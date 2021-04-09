import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TestRequestsComponent } from "./test-requests/test-requests.component";
import { HttpClientModule } from "@angular/common/http";
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, TestRequestsComponent, PostsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
