import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;


  constructor(private employeeService :EmployeeService,private http:HttpClient,private router:Router)
    {
          
    }
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();

  }

 /* deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data =>{console.log(data);
          this.reloadData();
          this.router.navigate(["/employees"])
        },
        error => console.log(error));
  }*/
  deleteEmployee(id: number) {
  let resp=  this.employeeService.deleteEmployee(id);
  resp.subscribe(data =>{console.log(data);
          this.reloadData();
          this.router.navigate(["/employees"])
        },
        error => console.log(error));

}
}
