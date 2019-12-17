import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseUrl = 'http://localhost:8080/api/v1/employees';


  login(username:string,password:string){
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'})
    }

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    let username='ram'
    let password='Password2'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post(`${this.baseUrl}`, employee,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    let username='ram'
    let password='Password2'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  
    return this.http.get(`${this.baseUrl}`,{headers});
  }

 
}