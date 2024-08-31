import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriyAddComponent } from "../../fetures/categoriy-add/categoriy-add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriyAddComponent , CategoriyAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'micro-front-end';
}
