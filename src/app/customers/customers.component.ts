import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  userDetail: any = null;

  constructor( private usersService: UsersService){}

  ngOnInit(): void {
    this.userDetail = this.usersService.getUsers();
    console.log(this.userDetail);

  }

}
