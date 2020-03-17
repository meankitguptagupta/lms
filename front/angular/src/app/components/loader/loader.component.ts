import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading:boolean;

  constructor(private _loader:LoaderService) { }

  ngOnInit() {
    this._loader.status.subscribe((status:boolean) => {
      this.loading = status;
    })
  }

}
