import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms'
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  hide=true
  loginForm : FormGroup
  constructor(private userService:UserService , private _route: ActivatedRoute, private router: Router) { }
 
  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)])
      }
    )
  }
  onLogin(){
    if(this.loginForm.invalid){
      return null
    }
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe({
      next: (response) =>{
        console.log(this)

        setTimeout(()=> {
          this.router.navigate(['']);
        },1000)

      },
      error: err =>{
        if(!err.status){
          this.loginForm.setErrors({ noConnection: true})
        }
        
      }
    })

  }

}
