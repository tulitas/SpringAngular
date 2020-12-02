import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeePosition} from "../employee-position";
import {EmployeePositionService} from "../employee-position.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {
  employeePosition: Observable<EmployeePosition[]>;
  constructor(private employeePositionService: EmployeePositionService,
              private router: Router) {}

  ngOnInit(): void {
  }
  reloadData() {
    this.employeePosition = this.employeePositionService.getPositionList();
  }

  deletePosition(id: number){
    this.employeePositionService.deletePosition(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
