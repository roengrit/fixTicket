import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mUsername: string = ''
  public mPassword: string = ''
  public fLogin: boolean = false
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogIn() {
    if (this.mUsername == 'admin' && this.mPassword == "1234") {
      this.fLogin = false
      localStorage.setItem('currentUser',this.mUsername)
      sessionStorage.setItem('currentUser',this.mUsername)
      this.router.navigate(['/home'])
      //window.location.href = '' 
    } else {
      this.fLogin = true
    }
  }
}
