import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../first.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  //Dependency Injection
  constructor(private firstService: FirstService,private router: Router) { }

  ngOnInit() {
    this.firstService
    .getlistFirstService()
    .subscribe((data) => {
      console.log('Retriving all data list');
      console.log(data);
    });
  }

}
