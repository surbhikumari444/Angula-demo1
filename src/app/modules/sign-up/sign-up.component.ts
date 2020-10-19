import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms'
import { UserService } from '../user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  hide=true
  signupForm : FormGroup
  constructor( private userService:UserService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        First_name: new FormControl(''),
        Last_name: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        password_confirmation: new FormControl(''),
        dob: new FormControl(''),
        pan: new FormControl(''),
        aadhar: new FormControl(''),
        mobile: new FormControl(''),
        user_role: new FormControl(''),
        
      }
      
    )
  }

  onSignUp(){
    console.log(this.signupForm.value)
    if(this.signupForm.invalid){
      return null
    }
    console.log(this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe({
      next: (response) =>{
        console.log(this)

      },
      error: err =>{
        if(!err.status){
          this.signupForm.setErrors({ noConnection: true})
        }
        
      }
    })

  

  }

}
