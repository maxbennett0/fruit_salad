import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawPlayer() {
  let template = ''
  appState.players.forEach(p => template += p.PlayerTemplate)
  setHTML('player', template)
}

function drawActivePlayer() {
  let activePlayer = appState.activePlayers
  setHTML('activeTemplate', activePlayer.ActiveTemplate)
}

function drawRandomFruit() {
  let randomFruit = appState.fruits[Math.floor(Math.random() * appState.fruits.length)];
  console.log(randomFruit);
  setText('drawFruit', randomFruit)
}

export class PlayersController {
  constructor() {
    console.log('players controller online');
    appState.on('activeFruit', drawRandomFruit)
  }
  addPlayer() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    playersService.addPlayer(formData)
    console.log(formData);
    _drawPlayer()
    form.reset()
  }

  setActivePlayer(id) {
    playersService.setActivePlayer(id)
    drawActivePlayer()
    drawRandomFruit()
  }

  getRandomFruit() {
    drawRandomFruit()
  }

  checkFruit() {
    window.event?.preventDefault()
    let form = window.event?.target
    let formData = getFormData(form)
    playersService.checkFruit(formData)
    drawRandomFruit()
    form.reset()
  }
}