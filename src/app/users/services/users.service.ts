import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl = 'http://localhost:3000/users';

  constructor(private api: HttpClient) { }

  getUserList(date: string) {
    let url = !date ? this.usersUrl : `${this.usersUrl}?dob=${date}`;
    return this.api.get<UserModel[]>(url);
  }
}
