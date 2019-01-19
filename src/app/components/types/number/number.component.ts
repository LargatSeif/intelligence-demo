import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @Input('options') options;

  constructor() { }

  ngOnInit() {
  }

}
