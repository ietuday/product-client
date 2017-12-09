import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { 
  	console.log("Inside constructor : TestService");
  }

  getData(){
  	console.log("Inside getData : TestService");
  }

}
