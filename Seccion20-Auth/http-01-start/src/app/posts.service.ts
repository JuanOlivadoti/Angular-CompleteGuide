import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class PostsService {
  
  constructor(private http: HttpClient) { }

  createAndStorePost(postData) {
    console.log(postData.title, postData.content);
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-75290-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(resp => {
        console.log(resp);
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-75290-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(map(responseData => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key })
          }
        }
        return postArray;
      }))
  }

  deletePosts(){
    return this.http.delete(
      'https://ng-complete-guide-75290-default-rtdb.firebaseio.com/posts.json'
    )
  }
}