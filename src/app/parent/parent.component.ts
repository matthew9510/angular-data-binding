import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent{

  parentAmount: number = 500;

  constructor() { }

  deposit(): void {
    this.parentAmount += 100;
  }
}
