import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input('options') options;
  
  constructor() { }

  ngOnInit() {
  }

}
