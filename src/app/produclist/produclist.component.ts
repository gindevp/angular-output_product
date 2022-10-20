import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produclist',
  templateUrl: './produclist.component.html',
  styleUrls: ['./produclist.component.css']
})
export class ProduclistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[
    {
      id: '1',
      name: 'iphone5',
      price: 1000
    },
    {
      id: '2',
      name: 'iphone6',
      price: 2000
    }
  ]

}
