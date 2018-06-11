import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
    //window.addEventListener('scroll', this.addClassToNav, true);
  }
  title = 'app';
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

  shouldRun = true
  //
  // addClassToNav(){
  //   if(window.scrollY !=0){
  //     document.getElementById('nav01').style.paddingBottom = "15px"
  //     document.getElementById('nav01').style.paddingTop = "15px"
  //   }
  //   else{
  //     document.getElementById('nav01').style.paddingBottom = "10px"
  //     document.getElementById('nav01').style.paddingTop = "10px"
  //   }
  // }
}



