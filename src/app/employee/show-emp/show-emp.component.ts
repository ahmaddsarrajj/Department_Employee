import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {


  constructor(private sharedservice : SharedService) { }

  empList : any = [];

  ngOnInit(): void {
  }

  refreshEmpList(){
    this.sharedservice.getEmplist().subscribe(data =>{this.empList = data;})
  }

}
