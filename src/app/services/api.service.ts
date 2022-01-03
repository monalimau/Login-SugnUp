import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api ='http://localhost:3000/ManagerList'
  constructor(private http: HttpClient) { }

  // add new manager on signup page
  addManager(data : any){
    return this.http.post<any>(this.api, data)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  // collect manager details from database
  getManager(){
    return this.http.get<any>(this.api)
    .pipe(map((res:any)=>{         
      return res;
    }))
  }


}
