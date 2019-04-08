import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../first.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  //Dependency Injection
  constructor(private FirstService: FirstService) { }

  ngOnInit() {
  }

}
