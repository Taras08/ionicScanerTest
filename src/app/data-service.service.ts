import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber, pipe, from } from 'rxjs';
import { map, filter } from "rxjs/operators";

@Injectable(
  //{providedIn: 'root'}
  )
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getListDetails(){
    return this.http.get('assets/data/products.json')
    //.pipe(map((response:Response)=>response.json()))
      
  }

}
