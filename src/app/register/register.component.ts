import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { User } from '../models/user';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userform: FormGroup;
  submitted: boolean;
  user:User = new User();
    constructor(private fb: FormBuilder, private testService: TestService){

    }

    ngOnInit() {
      this.userform = this.fb.group({
        'firstname': new FormControl('', Validators.required),
        'lastname': new FormControl('', Validators.required),
        'email': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
    });

  }
  
  onSubmit(value: any){
      this.submitted =true;
      this.user = value;
      this.user.password = window.btoa(this.user.password)
      console.log("Inside Submit:UserData",this.user);
      this.testService.registerUser(this.user);
    }

}
