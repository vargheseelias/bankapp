import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
 
  constructor(private uh:FormBuilder,public dataService:DataService) {}
  acno=''
  pswd=''
  amnt=''
   depositform=this.uh.group({
    acno: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    amnt: ['',[Validators.required,Validators.pattern('[0-9]*')]]

   })

   widrawform=this.uh.group({
    acno: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
    amnt: ['',[Validators.required,Validators.pattern('[0-9]*')]]

   })

  ngOnInit(): void {
  }


}
