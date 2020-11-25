import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  // tslint:disable-next-line:typedef
  save(){
    this.userService
      .createUser(this.user).subscribe( data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
    },
      error => console.log());
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    this.submitted = true;
    this.save();
  }

  // tslint:disable-next-line:typedef
  gotoList(){
    this.router.navigate(['/users']);
  }
}
