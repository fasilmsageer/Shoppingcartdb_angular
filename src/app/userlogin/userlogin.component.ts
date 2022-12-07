import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  username=""
  password=""

  constructor(private router:Router){}

  readlogin=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
  }
    console.log(data)

    if (this.username=="user" && this.password=="987654") {

      this.router.navigate(['/searchviewproduct'])
      
      
    } else {
      alert("invalid login")
      
    }
  }

}
