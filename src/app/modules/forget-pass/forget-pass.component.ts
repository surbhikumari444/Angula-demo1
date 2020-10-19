import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import{ FormGroup, FormControl, Validators} from '@angular/forms'



@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  onForgetForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.onForgetForm = new FormGroup(
      {
        email: new FormControl('')
        
      }
    )
  }
  onForget(){

  }


}
