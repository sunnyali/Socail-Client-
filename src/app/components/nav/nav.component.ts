import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public accountService: AccountService) {}
  model: any = {};
  isLoggedin: boolean = false;

  ngOnInit(): void {}
  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
        console.log('Logged in successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.accountService.logout();

    console.log(this.isLoggedin);
  }
}
