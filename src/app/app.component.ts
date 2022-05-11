import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Binding_demo';
  public roll_no: number = 99
  public name: String = "Sachin Tendulkar"
  public image = "/assets/Image_1.jpg"
}
