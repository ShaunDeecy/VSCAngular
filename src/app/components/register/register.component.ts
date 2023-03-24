import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from 'src/app/services/registration.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/UserProfile';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  //users: User[];
  users: any[] = [];
  
  loginForm = new FormGroup({
    username : new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmedPassword : new FormControl(''),
  });

  constructor(private registrationService: RegistrationService, private router : Router) {}

  newUserProfile: UserProfile = {
    id: 0,
    Username: 'John',
    Password: 'Doe',
    Email: 'johndoe@example.com',
    isDeleted: false,
    DriverId : 0
  };
 
  ngOnInit(): void {
    // this.getUsers();
   }
   
  onSubmit() {
  let username = this.loginForm.value.username;
  let email = this.loginForm.value.email;
  let password = this.loginForm.value.password;
  let confirmedPassword = this.loginForm.value.confirmedPassword;

console.log(this.users);
  const match = (password == confirmedPassword);
  
  if (match) {
    // Login successful

    this.newUserProfile.Password = password!;
    this.newUserProfile.Email = email!;
    this.newUserProfile.Username = username!;
console.log(this.newUserProfile);

    this.registrationService.addUser(this.newUserProfile).subscribe(
      (addedUser) => {
        console.log('New user added:', addedUser);
        // Handle the success case
      },
      (error) => {
        console.error('Error adding user:', error);
        // Handle the error case
      }
    );

    this.router.navigate(['Home']);
    console.log('Succes');
  } else {
    // Login failed
    console.log('Login failed');
  }
}

ToLogin(): void{
  this.router.navigate(['Login'])
}

}



