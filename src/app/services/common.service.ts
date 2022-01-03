import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // json api for employee
  api ='http://localhost:3000/EmployeeList'
  constructor(private http: HttpClient) { }

  // add new employee using post
  addEmployee(data : any){
    return this.http.post<any>(this.api, data)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  // get employee list using get
  getEmployee(){
    return this.http.get<any>(this.api)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  // update employee details 
  updateEmployee(data : any, id:number){
    return this.http.put<any>(this.api+"/" + id,data)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  // delete employee from database
  deleteEmployee(id:number){
    return this.http.delete<any>(this.api+"/"  +id)
    .pipe(map((res:any)=>{
      return res
    }))
  }

}
