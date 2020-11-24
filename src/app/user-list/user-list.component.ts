import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private userService: UserService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
    this.users = this.userService.getUserList();
  }

  // tslint:disable-next-line:typedef
  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(data => {
        console.log(data);
        this.reloadData();
      },
        error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  userDetails(id: number) {
    this.router.navigate(['userDetails', id]);
  }

  updateUser(id: number) {
    this.router.navigate(['update', id]);
  }
}
