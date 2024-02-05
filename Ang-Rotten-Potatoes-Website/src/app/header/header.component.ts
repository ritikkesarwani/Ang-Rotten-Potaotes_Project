import { Router } from '@angular/router';
import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private auth: AuthService){}

  ngOnInit(): void {
    
  }

  goToHome(){
    this.router.navigate(['home'])
  }

  logout(){
    this.auth.logout();
  }

}
