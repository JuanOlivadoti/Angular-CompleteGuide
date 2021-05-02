import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usrSrv: UsersService) { }

  ngOnInit() {
    this.users = this.usrSrv.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usrSrv.onSetToInactive(id);
  }
}
