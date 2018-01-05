import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  displaySignIn = false;

  constructor() {
  }

  ngOnInit() {
  }

  closeSignIn() {
    this.displaySignIn = false;
  }
}
