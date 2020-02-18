import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.css']
})
export class SidebarNavigationComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }

  getRole():string {
    return this._auth.getRole();
  }

  getRoot():string {
    return '/' + this.getRole();
  }

  getLink(url:string):string {
    return this.getRoot() + '/' + url;
  }

  toggleArrow(e):void {
    e.preventDefault();
    e.currentTarget.querySelector('i:last-child').classList.toggle('fa-angle-down')
    e.currentTarget.querySelector('i:last-child').classList.toggle('fa-angle-up')
  }

}
