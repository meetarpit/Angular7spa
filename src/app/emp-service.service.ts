import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  URL:any;
  constructor(private http: HttpClient) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  getEmployee(){
    this.URL = `http://localhost:8089/Angular7/list`;
    return this.http.get(this.URL);
  }


  saveEmployee(data) {
     
    this.URL = `http://localhost:8089/Angular7/save`;

    return this.http.post(this.URL, data);

  }
   editEmployee(data,id){
     var eid1=id;
    this.URL=`http://localhost:8089/Angular7/edit/${eid1}`;
    return this.http.put(this.URL,data);
   }
   deleteEmployee(id){
    var eid1=id;
   this.URL=`http://localhost:8089/Angular7/delete/${eid1}`;
   return this.http.delete(this.URL);
  }
}
