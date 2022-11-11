import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0
  }

  get PlayerTemplate() {
    return `
    <div class="p-2 fs-3">
    <span id="activePlayer" class="selectable" onclick="app.playersController.setActivePlayer('${this.id}')"> Player: ${this.name}   Score: ${this.score} </span>
    </div>
   
    `
  }

  get ActiveTemplate() {
    return `
    <div class="col-5 card d-flex justify-content-around">
            <div class="row justify-content-around p-2 text-center">
              <div class="col-5">
                <span> Name: ${this.name} </span>
              </div>
              <div class="col-5">
                <span> Score: ${this.score} </span>
              </div>
              <h1 id="drawFruit"></h1>
              <form action="" onsubmit="app.playersController.checkFruit()">
                <input type="text">
              </form>
              </div>
          </div>
  `
  }
}