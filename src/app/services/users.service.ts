import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( ) { }

  getUsers(){
    const users = [
      {userId: 10, userName: 'YouTube'},
      {userId: 20, userName: 'Instagram'}
    ];

    return users;

  }

}
