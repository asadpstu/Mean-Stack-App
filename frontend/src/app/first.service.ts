import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  url = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  getlistFirstService(){
    return this.http.get(`${this.url}/all-post`);
  }

  getSingleObjectFirstService(id){
    return this.http.get(`${this.url}/search-post/${id}`);
  }

  postObjectFirstService(title,body,author,comments,likes){
    const postdata = {
      title: title,
      body: body,
      author: author,
      comments: comments,
      likes:likes
    };
    return this.http.post(`${this.url}/create/new`, postdata);
  }

  updateObjectFirstService(id, title,body,author) {
    const postdata = {
      id:id,
      title: title,
      body: body,
      author: author
    };
    return this.http.post(`${this.url}/search-update/${id}`, postdata);
  }


  deleteObjectFirstService(id) {
    return this.http.get(`${this.url}/remove/${id}`);
  }


}
