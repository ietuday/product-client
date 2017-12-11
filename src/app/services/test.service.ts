import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Data } from '../models/data';
import { User } from '../models/user';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class TestService {

  dataUrl = 'http://localhost:8000/notes';

  constructor(private http: Http) { 
    console.log("Inside constructor : TestService-Http",http);;
  }

  getData() : Observable<Data[]> {
    return this.http.get(this.dataUrl)
        .map((res:Response) => res.json());
        //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

registerUser(user: User){
  console.log("Useer",user);
 
  let body = JSON.stringify(user);
  console.log(body);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  this.http.post('http://localhost:8000/notes/user',body, { headers }).subscribe(
        data => {
            console.log(data.json());           
        }
    );
}


}
