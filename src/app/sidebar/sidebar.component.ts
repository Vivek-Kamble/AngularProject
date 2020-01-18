import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { 
    let collapseStatus;
  }

  ngOnInit() {
  }
  
  collapseStatus : boolean=false;
  toCollapse()
  {
    // console.log("collapse");
    this.collapseStatus=true;
    console.log(this.collapseStatus)
  }

}
