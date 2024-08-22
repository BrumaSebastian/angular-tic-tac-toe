import { Component } from '@angular/core';
import { MainContentHeaderComponent } from "../main-content-header/main-content-header.component";
import { MainContentFooterComponent } from "../main-content-footer/main-content-footer.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MainContentHeaderComponent, MainContentFooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
