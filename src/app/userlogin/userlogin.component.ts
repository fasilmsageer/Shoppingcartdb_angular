import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  username=""
  password=""

  constructor(private router:Router,private api:ApiService){}

  readlogin=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
  }

  this.api.adduser(data).subscribe(
    (response:any)=>{
      this.username="",
      this.password=""
      if(response.status == "success"){
        let userId = response.userId
        console.log(userId)
        localStorage.setItem("userInfo",userId)
        this.router.navigate(["/searchviewproduct"])
      } else{
        alert(response.message)
      }
    }
  )
    
  }

}
