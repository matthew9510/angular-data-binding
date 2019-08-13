import { Component, Input} from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent{

  @Input() childAmount: number;
  constructor() { }

  withdraw(): void {
    this.childAmount -= 100;
  }

}
