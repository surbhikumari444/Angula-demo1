import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  mobWidth: any;

  constructor() { 
    
    
  }

  ngOnInit(): void {
  }
  
  @HostListener("window:resize", [])
  public onResize() {
    
    this.detectScreenSize();
  }
  
  // AfterViewInit() {
  //     this.detectScreenSize();
  // }
  
  private detectScreenSize() {
      const height = window.innerHeight;
      const width = window.innerWidth;
      console.log(width)
      if(width < 660){
        this.sideBarOpen= false;
        console.log('hiii')
      }
  }
  




  sideBarOpen = true;
  mobHeight: any;
  




  sideBarOpenbtn(e){
    
    this.sideBarOpen = !this.sideBarOpen
  }
 
}
