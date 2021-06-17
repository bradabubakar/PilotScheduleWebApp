import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  getPilotList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/pilot');
  }

  addPilot(val:any){
    return this.http.post(this.APIUrl+'/pilot',val);
  }

  updatePilot(val:any){
    return this.http.put(this.APIUrl+'/pilot',val);
  }

  deletePilot(val:any){
    return this.http.delete(this.APIUrl+'/pilot/'+val);
  }

  getAllOrigin():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/pilot/GetAllOrigin');
  }

  getAllDestination():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/pilot/GetAllDestination');
  }
}
