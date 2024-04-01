import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {select, Store} from "@ngrx/store";
import {isAuthorized} from "./login/store/selectors";
import {MatAnchor, MatButton} from "@angular/material/button";
import {logOut} from "./login/store/actions";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
    MatDivider],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
  }

  isAuthorized = false

  ngOnInit() {
    this.store.pipe(select(isAuthorized)).subscribe(auth => {
      this.isAuthorized = auth
    })
  }

  logOut() {
    this.store.dispatch(logOut())
  }
}
