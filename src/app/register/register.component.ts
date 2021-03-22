import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService, private fb: FormBuilder) { }
  uname = ""
  accno = ""
  pswd = ""

  registerform = this.fb.group({
    uname: ['',[Validators.required],Validators.pattern('[a-zA-Z ]*')],
    accno: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]]
  })

  ngOnInit(): void {
  }

  register() {
    // if(this.registerform.get('uname')?.errors){
    //   alert("invalid user name")
    // }
    
    if(this.registerform.valid){
      alert("form valid");
      var result = this.dataService.register(this.registerform.value.uname, this.registerform.value.accno, this.registerform.value.pswd)
      if(result){
        this.router.navigateByUrl("");
        }
        else{
             this.router.navigateByUrl("");
    
        }
     }
     else{
       alert("invalid form")
     }

    
    // console.log(this.uname, this.accno, this.pswd);


  }
}
