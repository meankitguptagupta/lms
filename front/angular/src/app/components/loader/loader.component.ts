import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private _loader:LoaderService) { }

  loading:boolean;

  ngOnInit() {
    this._loader.loaderStatus.subscribe((status:boolean) => {
      this.loading = status;
    });
  }

}
