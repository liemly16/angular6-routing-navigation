import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.isLoggedIn = true;
    this.router.navigate(['/admin']);
  }

  logout() {
    this.authService.isLoggedIn = false;
  }

}
