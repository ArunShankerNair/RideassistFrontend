import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-create',
  templateUrl: './work-create.component.html',
  styleUrls: ['./work-create.component.css']
})
export class WorkCreateComponent implements OnInit{

  @Input() custid:any

  constructor(){
    
    
  }
  ngOnInit() {
    console.log("inside work create :",this.custid);
  }

}
