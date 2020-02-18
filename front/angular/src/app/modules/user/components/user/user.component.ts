import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Toggle sidebar
   */
  toggleSideBar(e):void {
    e.preventDefault();
    document.getElementById('wrapper').classList.toggle("toggled");
    e.currentTarget.querySelector('i').classList.toggle('fa-angle-double-left')
    e.currentTarget.querySelector('i').classList.toggle('fa-angle-double-right')
  }

}
