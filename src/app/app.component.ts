import {Component, ElementRef, HostListener, Input, Directive} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular';
  title1 = null;

  items = ['iphone5','iphone6','iphone7','iphone8'];

  addItem(newItem: string){
    this.items.push(newItem);
    console.log(newItem)
    console.log(this.items)

  }

  removeItem(item:any){
    console.log(item)
    const index= this.items.indexOf(item)
    console.log(index)
    this.items.splice(index,1);
  }

  color: string;

  getColor(): string{
    return this.color;
  }

}
