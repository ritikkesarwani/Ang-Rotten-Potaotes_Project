import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ""; 
  password = "";
  errormsg = "";

  
  constructor(private auth:AuthService, private router:Router){}
  ngOnInit(): void {
    
  }


  login(){
    if(this.username.trim().length === 0){
      this.errormsg = "Username is required"
    } else if (this.password.trim().length === 0){
      this.errormsg = "Password is required";
    } else {
      this.errormsg = "";
      let res = this.auth.login(this.username, this.password)
      if(res === 200){
        this.router.navigate(['home'])
      }
      if(res === 400){
        this.errormsg = "Invalid Credentials"
      }
    }
    




  }

}
