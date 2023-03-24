import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  //users: User[];
  users: any[] = [];
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  // username: string = "";
  // password: string = "";

  constructor(private loginservice: LoginService,  private userService: UserService,private router : Router) {}

  ngOnInit(): void {
    this.getUsers();
   }


   getUsers(): void{
    this.loginservice.getProfiles()
    .subscribe(userprofiles => this.users = userprofiles);
   }

  onSubmit() {
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;
// console.log(this.users);
  const match = this.users.find(user => user.email === email && user.password === password);

  if (match) {
    // Login successful
    localStorage.setItem('token', 'jwt_token_here');
    this.userService.setCurrentUser(match); // Set the current user object
    //console.log(this.userService.getCurrentUser())
    console.log(match)
    this.router.navigate(['Home']);
    console.log('Succes');
  } else {
    // Login failed
    console.log('Login failed');
  }
}
ToRegister(): void{
  this.router.navigate(['Register'])
}

}

// constructor(private userService: UserService) {}

// ngOnInit(): void {
//   const currentUser = this.userService.getCurrentUser(); // Get the current user object
//   // Use the current user object
// }



//AXIOS