import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {
    1000: { accno: 1000, name: "userone", balance: "5000", password: "user1" },
    1001: { accno: 1001, name: "usertwo", balance: "3000", password: "user2" },
    1002: { accno: 1002, name: "userthree", balance: "3000", password: "user3" },
    1003: { accno: 1003, name: "userfour", balance: "3000", password: "user4" },
    1004: { accno: 1004, name: "userfive", balance: "3000", password: "user5" }

  }

  constructor() { }
  currentuser:any;
  register(accno: any, name: any, password: any) {
    if (accno in this.accountDetails) {
      alert("user exists")
      return false;
    }
    else {
      this.accountDetails[accno] = {
        accno,
        name,
        balance: 0,
        password
      }
      alert("registration successful");
      console.log(this.accountDetails);
    }
    return true;
  }

  login(acno: any, password: any) {
    if (acno in this.accountDetails) {
      var pswd1 = this.accountDetails[acno].password
      if (pswd1 == password) {
        alert("log in succesful")
        this.currentuser= this.accountDetails[acno].name

        return true;
      }
    
      else {
        alert("incorrect pswrd")
        return false;
      }
    }
    else {
        alert("no user exist")
        return false;
      }
    }

  
}
