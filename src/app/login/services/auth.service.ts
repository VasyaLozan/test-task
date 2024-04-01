import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {LoginModel} from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: HttpClient) { }

  logIn(params: LoginModel) {
    return of(true);
  }

  logOut() {
    return of(false);
  }
}
