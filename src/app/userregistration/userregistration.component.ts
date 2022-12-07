import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  
  name=""
  address=""
  phonenumber=""
  email=""
  username=""
  password=""
  confirmpassword=""

  constructor(private router:Router){}



  readuserreg=()=>
  {
    let data:any={
      "name":this.name,
      "address":this.address,
      "phonenumber":this.phonenumber,
      "email":this.email,
      "username":this.username,
      "password":this.password,
      "confirmpassword":this.password
  }
    console.log(data)

    if (this.password==this.confirmpassword) {

      this.router.navigate(['/userlogin'])
      
      
    } else {
      alert("invalid password")
      
    }
  }

}
