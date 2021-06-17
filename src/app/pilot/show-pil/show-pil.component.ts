import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-pil',
  templateUrl: './show-pil.component.html',
  styleUrls: ['./show-pil.component.css']
})
export class ShowPilComponent implements OnInit {

  constructor(private service:SharedService) { }

  PilotList:any=[];
  
  ModalTitle:string;
  ActivateAddEditPilComp:boolean=false;
  editpil:any;

  ngOnInit(): void {
    this.refreshPilotList();
  }

  addClick(){
    this.editpil={
      PilotId:0,
      PilotName:"",
      Schedule:"",
      Origin:"",
      Destination:""
    }
    this.ModalTitle="Add Pilot";
    this.ActivateAddEditPilComp=true;
  }

  editClick(item){
    console.log(item);
    this.editpil=item;
    this.ModalTitle="Edit Pilot Schedule";
    this.ActivateAddEditPilComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure you want to delete?')){
      this.service.deletePilot(item.PilotId).subscribe(data=>{
        alert(data.toString());
        this.refreshPilotList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPilComp=false;
    this.refreshPilotList();
  }


  refreshPilotList(){
    this.service.getPilotList().subscribe(data=>{
      this.PilotList=data;
     });
  }


}
