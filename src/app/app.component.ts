import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElectronTest';

  items = [];

  constructor() {
    this.loadData();
  }

  public loadData(): void {
    for (let i = 0; i < 100; i++) {
      this.items.push('Laptop');
    }
  }


}
