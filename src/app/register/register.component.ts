import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private dataService:DataService) { }
  uname=""
  accno=""
  pswd=""

  ngOnInit(): void {
  }

  register(){
    var result=this.dataService.register(this.accno,this.uname,this.pswd)
    // if(result){
      this.router.navigateByUrl("");
    // }
    // else{
      //      this.router.navigateByUrl("");

    // }
    console.log(this.uname,this.accno,this.pswd);
    
    
  }
}
