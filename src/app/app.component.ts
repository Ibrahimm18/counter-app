import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
  count: number  = 0;


  clickIncrease = () => {
    this.count = this.count + 1
    if (this.count > 10) {
      this.count = 10;
    }
   
  };

  clickDecrease() {
    this.count = this.count - 1
    if (this.count < 0) {
      this.count = 0;
    }
  
  };

  clickReset = () => {
   this.count = 0;
  };



}
