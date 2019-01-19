import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input('options') options;
  constructor() { }

  ngOnInit() {
  }

}
