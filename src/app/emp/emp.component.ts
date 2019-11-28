import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor(private service: DataService) { }
  emp:any;
  ngOnInit() 
  {
    let observableResult = this.service.Select();
    observableResult.subscribe((result)=>{
      console.log(result);
      this.emp = result;
    })
  }

}
