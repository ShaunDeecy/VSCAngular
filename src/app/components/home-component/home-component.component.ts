import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
//import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  constructor( userService: UserService) {
    this.userService = userService;
  }
  userService : UserService;
     
  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser(); // Get the current user object
    //Use the current user object
   console.log(currentUser!);
   console.log(currentUser.Username)
// console.log(this.log.getUsers())
  }
}



































//  user = this.getUser();
//   ngOnInit(): void {
//     this.getUser();
//   }
//   getUser(){
//     const currentUser = this.userService.getCurrentUser();
//   console.log(currentUser);  
  // }

/*

constructor(private userService: UserService) {}
  currentUser!: UserProfile;
  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }
}*/