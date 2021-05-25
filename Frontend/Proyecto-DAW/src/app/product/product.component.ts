import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  panelOpenState = false;

  constructor(
    private _ac: ActivatedRoute
  ) { }
id :any;
  ngOnInit(): void {
    this._ac.paramMap.subscribe(params => {
      const id = params.get('id')
      this.id = id;
    })
  }

}
