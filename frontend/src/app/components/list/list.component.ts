import { Post } from './../../Post.model';
import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../first.service';

import { MatTableDataSource } from '@angular/material';



import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts : Post[];
  columnsToDisplay = ['title', 'body', 'author','price','edition','actions'];
  //Dependency Injection
  constructor(private firstService: FirstService,private router: Router) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this.firstService.getlistFirstService()
      .subscribe((data : Post[]) => {
         this.posts = data;
         console.log(this.posts);
      });
    
  }

  editIssue()
  {

  }

}
