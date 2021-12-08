import { Component,  OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  

  constructor(private service : SharedService) { this.depRefreshList(); }

  depList : any = [];
  ActivateAddEditDepComp:boolean = false;
  dep:any;
 


  ngOnInit(): void {   
    this.depRefreshList();
  }

  depRefreshList(){
    this.service.getDeplist().subscribe(data => {
      this.depList = data;
    })
  }


  addDepart(){

    this.dep = {
      DEPARTMENT_ID : 0,
      NAME : ""

    }
    
    this.ActivateAddEditDepComp = true;
    
  }

  deleteItem(item:any){
    if(confirm('Are you sure?')){
      this.service.deleteDeplist(item.DEPARTMENT_ID).subscribe(data => {alert(
        data.toString());
        this.depRefreshList();
  
      })
      
      
    }
  }

  

  editDepart(item:any){
    this.dep = item;
    this.ActivateAddEditDepComp = true;
  }
}
