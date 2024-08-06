import { Injectable } from '@angular/core';
import { User } from '../models/users/user';
import { usersData } from '../data/user.data';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  findAllUsers():User[]{
    return usersData;
  }
}
