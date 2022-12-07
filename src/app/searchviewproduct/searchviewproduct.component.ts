import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchviewproduct',
  templateUrl: './searchviewproduct.component.html',
  styleUrls: ['./searchviewproduct.component.css']
})
export class SearchviewproductComponent {

  constructor(private api:ApiService){}

  name=""
  searchdata:any=[]

  readValue=()=>{
    let data ={"name":this.name}
    console.log(data)

    this.api.searchproduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid product name")
        }else{
          this.searchdata = response;
        }
      }
    )
  }


}
