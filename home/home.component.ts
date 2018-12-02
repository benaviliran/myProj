import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<input #newName>
  <button (click)="addName(newName.value);newName.value=''">
  Add
  </button>
  <ul><li *ngFor="let x of nameList">{{x}}</li></ul>

  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="book store";
  nameList=['Dan','Gil','Liran'];
  addName(val:string)
  {
    if(val){
      this.nameList.push(val);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
