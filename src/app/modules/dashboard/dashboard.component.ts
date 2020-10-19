import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  DashboardForm : FormGroup

  ngOnInit(): void {
    this.DashboardForm = new FormGroup(
      {
        
      }
    )
  }
  hide = true;

  
}
