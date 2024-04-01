import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getUserList} from './store/actions'
import {userList} from "./store/selectors";
import {UserModel} from "./models/users.model";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {skip} from "rxjs";
import {MatDatepickerInputEvent, MatDatepickerModule} from "@angular/material/datepicker";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {provideNativeDateAdapter} from "@angular/material/core";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    DatePipe
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit, AfterViewInit {
  date = new FormControl(new Date());

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'dob', 'role'];
  dataSource: MatTableDataSource<UserModel>

  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store) {}

  ngOnInit() {
    this.loadUsers('')
  }

  ngAfterViewInit() {
    this.store.pipe(select(userList), skip(1)).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    })
  }

  loadUsers(date: string) {
    this.store.dispatch(getUserList({date}))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      const date = event.value.toISOString();
      this.loadUsers(date)
    }
  }
}
