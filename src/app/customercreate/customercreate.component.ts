import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RideService } from '../services/ride.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customercreate',
  templateUrl: './customercreate.component.html',
  styleUrls: ['./customercreate.component.css']
})
export class CustomercreateComponent {
  custid:any
  isEdit:boolean=false

  constructor(private service:RideService,private route:Router, private router:ActivatedRoute){

    this.service.isAuthenticated()

    this.custid=this.router.snapshot.queryParams["custid"]

    if(this.custid){
      this.isEdit=true

      this.initializeForm()
      
    }
    

  }

  initializeForm(){
    this.service.retrieveCustomer(this.custid).subscribe(data=>{

      this.customerForm.patchValue(data)

    })
  }

  customerForm = new FormGroup({
    name: new FormControl("",Validators.required),
    phone: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    "vehicle_no": new FormControl("",Validators.required),
    "running_km": new FormControl("",Validators.required)
  })

  handleSubmit(){
    let formData = this.customerForm.value

    if(this.isEdit){
      //edit logic
      this.service.updateCustomer(this.custid,formData).subscribe(data=>{
        this.route.navigateByUrl("customers/")
      })
    }
    else{
      //create/add logic
      this.service.createCustomer(formData).subscribe((data:any)=>{
        // console.log(data);
        this.route.navigateByUrl(`worksummary/${data.id}`)
      })
    }
    
  }
}
