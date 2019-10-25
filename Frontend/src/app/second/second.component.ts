import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import {Asset} from '../asset';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  //assetData: Asset;
  id: number;
  name: string;
  constructor(private service: HelloService) { }

  ngOnInit() {
  // this.getData();
    this.id = this.service.getid();
    this.name = this.service.getname();
  }

  //  public getData() {
  //
  // this.assetData = this.service.getasset();
  //    console.log(this.assetData);
  //
  // }


}
