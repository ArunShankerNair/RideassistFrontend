import { Component } from '@angular/core';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {

  customers:any

  constructor(private service:RideService){

    this.ngOnInit()
    this.service.isAuthenticated()
  }
  ngOnInit(){
    this.service.getCustomers().subscribe(data=>this.customers=data)

  }


  handleDelete(id:any){
    this.service.deleteCustomer(id).subscribe(data=>{
      // console.log(data);
      this.ngOnInit()
      
    })
  }
}
