import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  loginform=this.lg.group({
    acno: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]]
  })
  
  constructor(private router: Router,private dataService:DataService,private lg:FormBuilder) { } //dependancy injection create a private variable "router" for login component and adding instance(router) from app routing module

  ngOnInit(): void {
  }


  // getusername(event: any) {
  //   this.acno = event.target.value;
  //   console.log(this.acno);
  //   alert(this.acno)

  // }
  // passwordchange(event: any) {
  //   this.pswd = event.target.value;
  //   console.log(this.pswd);
  //   alert(this.pswd)

  // }




  login() {
    // alert("works")

    let acnum = this.loginform.value.acno;
    let psrd = this.loginform.value.pswd
  

    // let accno=a.value; //template referencing
    // let pswrd=p.value

    let dataset = this.dataService.accountDetails;
    // if (acnum in dataset) {
    //   var pswd1 = dataset[acnum].password
    //   if (pswd1 == psrd) {
    //     alert("log in succesful")
    //     this.router.navigateByUrl('userhome'); //dependancy injection
    //   }
    //   else {
    //     alert("incorrect pswrd")
    //   }
    // }
    // else {
    //   alert("no user exixts with provided accnum")
    // }\

    if(this.loginform.valid){
      alert("form valid");
      var result = this.dataService.login(this.loginform.value.acno, this.loginform.value.pswd)
      if(result){
        alert("log in as"+this.loginform.value.acno)
        this.router.navigateByUrl("userhome");
        }
        else{
            alert("failed to login")    
        }
     }
     else{
       alert("invalid form")
     }

  }


}