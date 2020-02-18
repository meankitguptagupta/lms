import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
  host: {'class': 'ml-auto'}
})
export class TopNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
