import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private svc :EmployeeService,private http:HttpClient)
    {
          
    }

  title = 'welcome employee management';
ngOnInit()
{
  // let obs=this.http.get('http://localhost:8080/api/v1/employees');

   // obs.subscribe((responce)=>console.log(responce));
}


}