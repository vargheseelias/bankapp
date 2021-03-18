import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  unm = "enter your user name"
  dem = "#eg of component to view"
  acno = ""
  pswd = ""
  constructor(private router: Router,private dataService:DataService) { } //dependancy injection create a private variable "router" for login component and adding instance(router) from app routing module

  ngOnInit(): void {
  }


  getusername(event: any) {
    this.acno = event.target.value;
    console.log(this.acno);
    alert(this.acno)

  }
  passwordchange(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd);
    alert(this.pswd)

  }




  login() {
    alert("works")

    let acnum = this.acno;
    let psrd = this.pswd;

    // let accno=a.value; //template referencing
    // let pswrd=p.value

    let dataset = this.dataService.accountDetails;
    if (acnum in dataset) {
      var pswd1 = dataset[acnum].password
      if (pswd1 == psrd) {
        alert("log in succesful")
        this.router.navigateByUrl('userhome'); //dependancy injection
      }
      else {
        alert("incorrect pswrd")
      }
    }
    else {
      alert("no user exixts with provided accnum")
    }

  }


}