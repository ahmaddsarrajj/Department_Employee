import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIURL = "https://localhost:44384/api";
  readonly PHOTOURL ="https://localhost:44384/PHOTO";

  constructor(private http: HttpClient) { }
   
  getDeplist():Observable<any[]> {
    return this.http.get<any>(this.APIURL + "/Department");
  }

  addDeplist(val : any) {
    return this.http.post(this.APIURL + "/Department" , val);
  }

  updateDeplist(val : any){
    return this.http.put(this.APIURL + "/Department" , val)
  }

  deleteDeplist(val : any){
    return this.http.delete(this.APIURL + "/Department/" + val);
  }


  //employee
  getEmplist(): Observable<any[]>{
    return this.http.get<any>(this.APIURL + "/Employee");
  }

  addEmplist(val : any){
    return this.http.post(this.APIURL + "/Employee" , val);
  }

  updateEmplist(val : any){
    return this.http.put(this.APIURL + "/Employee" , val)
  }

  deleteEmplist(val : any){
    return this.http.delete(this.APIURL + "/Employee" + val)
  }

  uploadPhoto(val : any){
    return this.http.post(this.APIURL + "/Employee/uploadPhoto",val)
  }

  getAll() : Observable<any[]>{
    return this.http.get<any>(this.APIURL + "/Employee/GetAllDepartmentNames");
  }
}
