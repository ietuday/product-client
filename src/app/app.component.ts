import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Data } from './models/data' ;
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  testData:Array<Data> = new Array<Data>();

  constructor(private testService: TestService){
    // this.data();
  }

  data(){
    console.log("Inside Data");
    
    this.testService.getData().subscribe((data)=>{
      //data from backend through Service
      this.testData = data;
   })
  }
}
