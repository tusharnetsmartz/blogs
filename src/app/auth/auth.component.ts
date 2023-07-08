import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared/service/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  showPassword:boolean = false;
  loading:boolean = false;
  users: any[] = [];

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private router: Router,
              private fb: FormBuilder,
              private _sharedService: SharedService,
              private toastService: ToastrService
  ) { }

  ngOnInit(): void {
   this.createLoginForm();
   this.getUsersList();
  }

  createLoginForm(): void {
     this.loginForm = this.fb.group({
      email : ['Sincere@april.biz', [Validators.required, Validators.email]],
      password: ['123456',  [Validators.required]]
     })
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  getUsersList() {
    this._sharedService.getUsersList().subscribe({
      next:(users) => {
        users.forEach((user) => {
          this.users.push(user);
          
        })
      }
    })
  }

  checkAuth(email:string): any {
    let i = 0
    for( i = 0; i< this.users.length ; i++ ){
      if(email == this.users[i].email){
        return this.users[i];
      }
    }
    return null;
  }

  login(): void {
    if (this.loginForm.valid) {
      var user = this.checkAuth(this.loginForm.value.email)

      if (!!user && this.loginForm.value.password === '123456') {
        localStorage.setItem('token', this.loginForm.value.email);
        localStorage.setItem('userName', user.name);
        this.toastService.success('Login Successfully!', 'Success');
        this._sharedService.isUserLoggedIn.next(true);
        this.router.navigate(['/']);
      } else {
        this.toastService.error('Email or Password is wrong!', 'Login Failed')
      }
    }
  }

}
