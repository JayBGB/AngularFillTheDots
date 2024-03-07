import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {interval, Observable} from "rxjs";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  dots = Array.from(Array(189).keys());
  colors = ["red", "green", "blue", "pink", "purple", "orange", "yellow", "cyan", "grey", "magenta"];
  randomColorIndex = 0;
  counter = 25;
  myInterval: any;
  changeStyle(dot: any){
    this.randomColorIndex = Math.floor(Math.random() * 10);
    dot.classList.add(this.colors[this.randomColorIndex]);
  }

  increaseCounter(){
    this.counter++;
  }
  /***
  startTimer(){
    this.myInterval=setInterval(() => {
      this.counter--;
    }, 1000)
  }

  ngOnInit(): void{
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.myInterval);
  }
    ***/
}
