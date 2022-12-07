import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {

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
