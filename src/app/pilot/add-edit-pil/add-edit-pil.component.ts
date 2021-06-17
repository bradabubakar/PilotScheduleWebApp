import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-pil',
  templateUrl: './add-edit-pil.component.html',
  styleUrls: ['./add-edit-pil.component.css']
})
export class AddEditPilComponent implements OnInit {

  constructor(private service:SharedService) { }

  DestinationsList:any=[];
  OriginsList:any=[];


  @Input() editpil:any;
  PilotId:string;
  PilotName:string;
  Schedule:string;
  Origin:string;
  Destination:string;


  ngOnInit(): void {
     this.loadOriginList();
     this.loadDestinationList();
  }

  loadOriginList(){
    this.service.getAllOrigin().subscribe((data:any)=>{
      this.OriginsList=data;

      this.PilotId=this.editpil.PilotId;
      this.PilotName=this.editpil.PilotName;
      this.Schedule=this.editpil.Schedule;
      this.Origin=this.editpil.Origin;
      this.Destination=this.editpil.Destination;
    });
  }

  loadDestinationList(){
    this.service.getAllDestination().subscribe((data:any)=>{
      this.DestinationsList=data;

      this.PilotId=this.editpil.PilotId;
      this.PilotName=this.editpil.PilotName;
      this.Schedule=this.editpil.Schedule;
      this.Origin=this.editpil.Origin;
      this.Destination= this.editpil.Destination;
    });
  }

  addPilot(){
    var val = {PilotId:this.PilotId,
                PilotName:this.PilotName,
                Schedule:this.Schedule,
                Origin:this.Origin,
                Destination:this.Destination};

    this.service.addPilot(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePilot(){
    var val = {PilotId:this.PilotId,
      PilotName:this.PilotName,
      Schedule:this.Schedule,
      Origin:this.Origin,
      Destination:this.Destination};
    this.service.updatePilot(val).subscribe(res=>{
    alert(res.toString());
    });
  }

 

}
