import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeePosition} from '../employee-position';
import {EmployeePositionService} from '../employee-position.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  employeePosition: Observable<EmployeePosition[]>;

  constructor(private employeeService: EmployeeService,
              private employeePositionService: EmployeePositionService,
              private router: Router) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
    this.employeePosition = this.employeePositionService.getPositionList();
  }

  // tslint:disable-next-line:typedef
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  // tslint:disable-next-line:typedef
  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
}
