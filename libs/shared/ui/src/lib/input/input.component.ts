import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() label = "";


  ngOnInit(): void {}
}
