import { Component, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent{

  @Input() childAmount: number;
  // @Output()  childAmountChange: EventEmitter = new EventEmitter();  // Why can I not decare a type ?
  @Output()  childAmountChange = new EventEmitter(); 
  constructor() { }

  withdraw(): void {
    this.childAmount -= 100;
    this.childAmountChange.emit(this.childAmount);
  }

}
