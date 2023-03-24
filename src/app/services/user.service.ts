import { Injectable } from '@angular/core';
import { UserProfile } from '../UserProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: UserProfile;

  constructor() {
    // Initialize currentUser to an empty UserProfile object
    this.currentUser = {} as UserProfile;
    //this.getCurrentUser();
  }

   setCurrentUser(user: UserProfile) {
    this.currentUser = user;
  }
  
   getCurrentUser(): UserProfile {
    console.log("service");
    console.log(this.currentUser);
    return this.currentUser;
  }
  
}


/*
import { Injectable } from '@angular/core';
import { UserProfile } from '../UserProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: UserProfile;

  constructor() {
    // Initialize currentUser to an empty UserProfile object
    this.currentUser = {} as UserProfile;
  }

  getCurrentUser(): UserProfile {
    return this.currentUser;
  }

  setCurrentUser(user: UserProfile): void {
    this.currentUser = user;
  }
}


import { Injectable } from '@angular/core';
import { UserProfile } from '../UserProfile';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser = new BehaviorSubject<UserProfile>({} as UserProfile);

  constructor() {}

  public setCurrentUser(user: UserProfile) {
    this.currentUser.next(user);
  }

  public getCurrentUser(): BehaviorSubject<UserProfile> {
    return this.currentUser;
  }
}

*/ 