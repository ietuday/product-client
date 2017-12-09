import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Data } from '../models/data'

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class TestService {

  dataUrl = 'http://localhost:8000/notes';

  constructor(private http: Http) { 
  	console.log("Inside constructor : TestService-Http",http);
  }

  getData() : Observable<Data[]> {
    return this.http.get(this.dataUrl)
        .map((res:Response) => res.json());
        //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}


}
