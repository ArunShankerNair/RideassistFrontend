import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit{

  @Input() custid:any

  constructor(){
    
    
  }
  ngOnInit() {
    console.log("inside work list :",this.custid);
  }

  

}
