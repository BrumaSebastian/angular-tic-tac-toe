import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './Layout/navigation/navigation.component';
import { MainContentComponent } from './Layout/main-content/main-content.component';
import { GameMode } from './Types/GameMode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  gameMode: GameMode = GameMode.None;

  setGameMode(gameMode: GameMode) {
    this.gameMode = gameMode;
  }
}
