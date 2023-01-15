import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})

export class ButtonComponent implements OnInit {
  @Input() label!: string
  @Input() routeTo!: string
  @Input() btnType!: string

  ngOnInit(): void {
    this.gotoPage(this.routeTo)
  }

  constructor(private route: Router) {}

  gotoPage(value: string): void {
    this.routeTo = value
    console.log(this.routeTo)
  }
}

