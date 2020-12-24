import { Component, OnInit } from '@angular/core';
import {JoinQueryService} from "../join-query.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-join-employee-position-list',
  templateUrl: './join-employee-position-list.component.html',
  styleUrls: ['./join-employee-position-list.component.css']
})
export class JoinEmployeePositionListComponent implements OnInit {

  constructor(private joinQueveryService: JoinQueryService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  employeeAndPositionList() {
    this.router.navigate(['/right']);
  }
}
