import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

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

  constructor(private router:Router,private api:ApiService){}
  



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

      this.api.adduserlogin(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.status=="success"){
            this.name=""
            this.address=""
            this.phonenumber=""
            this.email=""
            this.username=""
            this.password=""
            this.confirmpassword=""
          } else{
            alert("something went wrong")
  
          }
          
        }
      )
      
      
    } else {
      alert("invalid password")
      
    }
  }

}
