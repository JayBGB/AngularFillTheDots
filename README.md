# Fill-The-Dots

Vamos a hacer un pequeño juego con Angular. Consistirá en una pequeña pantalla en la que, al hacer "hover"

## Instalación

Se necesita tener instalado Node.js. Cuando lo tengamos, debemos ejecutar el siguiente comando:

```bash
npm install
```

## Componente User:

Si queremos crear un componente, ejecutamos el siguiente comando:

```bash
ng generate component user
```

Tras ejecutar esto, se creará una carpeta con todo lo que el componente necesita para funcionar.


## TypeScript

```typescript
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
}
```

## HTML

```html
<app-header>
</app-header>

<div>
  <div class="game-container">

      @for (midot of dots; track midot.valueOf()) {
        <div #dotRefs class="dot"  (mouseover)="changeStyle(dotRefs)"></div>
      }
  </div>

  <div class="result" (click) = "increaseCounter()">
    <p>
      Counter:
      {{ counter }}
    </p>
  </div>
</div>
```

## SCSS

```scss

h1 {
    text-align: center;
    padding: 20px;
    text-transform: uppercase;
}

.game-container{

    width: 845px;
    height: 363px;
    padding: 20px;
    margin: 0px auto;
    border: 2px solid purple;
    border-radius: 5px;
    overflow: hidden;
    .dot{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        float: left;
        background-color: white;
        &.red{
          background-color: darkred;
          transition: background-color 0.5s;
        }
        &.blue{
        background-color: darkblue;
        transition: background-color 0.5s;
        }
        &.green{
        background-color: darkgreen;
        transition: background-color 0.5s;
        }
        &.pink{
        background-color: deeppink;
        transition: background-color 0.5s;
        }
        &.purple{
        background-color: purple;
        transition: background-color 0.5s;
        }
        &.orange{
        background-color: orangered;
        transition: background-color 0.5s;
        }
        &.yellow{
        background-color: yellow;
        transition: background-color 0.5s;
        }
        &.cyan{
        background-color: darkcyan;
        transition: background-color 0.5s;
        }
        &.grey{
        background-color: dimgrey;
        transition: background-color 0.5s;
        }
        &.magenta{
        background-color: darkmagenta;
        transition: background-color 0.5s;
        }
    }
}


.result {
  border-radius: 100%;
  display: inline-block;
  background-color: burlywood;
  margin: auto;
  user-select: none;
  cursor: pointer;
  padding: 30px;
  font-size: 40px;
  font-weight: bold;
}



```

## Componente Header:

Este componente es muy simple ya que solamente añade un header para establecer el título de la página.

```html
<h1>
  FILL-THE-DOTS
</h1>
```





