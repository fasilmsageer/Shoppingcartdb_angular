import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  email=""
  password=""

  constructor(private router:Router,private api:ApiService){}

  readlogin=()=>
  {
    let data:any={
      "email":this.email,
      "password":this.password
  }

  this.api.adduserlogin(data).subscribe(
    (response:any)=>{
      this.email="",
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
    console.log(data)

    if (this.email=="fasil" && this.password=="987654") {

      this.router.navigate(['/searchviewproduct'])
      
      
    } else {
      alert("invalid login")
      
    }
  }

}
