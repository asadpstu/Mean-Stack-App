import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../first.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  //Dependency Injection
  constructor(private FirstService: FirstService) { }

  ngOnInit() {
  }

}
