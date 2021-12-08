import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() dep : any;
  DPARTMENT_ID : string = "";
  NAME : string = "";

  ngOnInit(): void {
  this.DPARTMENT_ID = this.dep.DEPARTMENT_ID;
  this.NAME = this.dep.NAME;
  }

  addDepartment(){
    var val = {DPARTMENT_ID : this.DPARTMENT_ID,
      NAME : this.NAME
    };

    this.service.addDeplist(val).subscribe(res => {
      alert(res.toString());
    })
      
  }

  updateDepartment(){
    
    var val = {DPARTMENT_ID : this.DPARTMENT_ID,
      NAME : this.NAME
    };
    
    this.service.updateDeplist(val).subscribe(res => {
      alert(res.toString());
  })
    
}
  }

