import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userName: string = '';
  private password: string = '';
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onRegister(){
    this.router.navigate(['/register']);
  }

}
