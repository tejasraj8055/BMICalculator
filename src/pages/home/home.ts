import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result:string;
  height:number;
  weight:number;
  ans;
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder)
               {
   this.myForm = this.formBuilder.group({
     height:["", Validators.required],
     weight:["", Validators.required],
   });
  }

  bmiCalculator(){
    if(this.height <=22 || this.height >=272){
      this.result="Please enter valid height";
    }
    if(this.weight <=9 || this.weight >=636){
      this.result="Please enter valid weight";
    }
    if((this.height>22 && this.height<272) && (this.weight>9 && this.weight<636))
    {this.height=this.height/100;
    this.ans = (this.weight/(this.height*2));
    this.ans=parseFloat(this.ans).toFixed();
    this.height=0;
    this.weight=0;
    if(this.ans<18.5){
      this.result="UnderWeight";
    }
    if(this.ans>18.5 && this.ans<=24.9){
      this.result="Normal";
    }
    if(this.ans>24.9 && this.ans<=29.9){
      this.result="Over Weight";
    }
    if(this.ans>=30){
      this.result="Obesity";
    }}
  
  }

}
