import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Screens } from '../shared/screens/Screens';
import { Scenario } from '../shared/objects/Scenario';

@Component({
  templateUrl: 'lets-play.page.component.html'
})
export class LetsPlayPageComponent implements OnInit {
  public canvasWidth = window.screen.width;
  public canvasHeight = window.screen.height;
  @ViewChild('arena', {static: true}) private elArena: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    Screens.changeScreen(Screens.start);
    Scenario.loop();
  }

  click() {
    Screens.currentScreen.click();
  }
}
