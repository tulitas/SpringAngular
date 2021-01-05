import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeePosition} from '../employee-position';
import {EmployeePositionService} from '../employee-position.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  positionId: Observable<EmployeePosition[]>;

  constructor(private employeeService: EmployeeService,
              private employeePositionService: EmployeePositionService,
              private router: Router, ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  reloadData() {
    this.positionId = this.employeePositionService.getPositionList();
  }

 // @ts-ignore
  ployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  // tslint:disable-next-line:typedef
  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.gotoList();
    },
    error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  // tslint:disable-next-line:typedef
  gotoList() {
    this.router.navigate(['/employees']);
  }

}
