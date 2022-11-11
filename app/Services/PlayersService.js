import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";

class PlayersService {
  checkFruit(formData) {
    if (formData == appState.activeFruit) {
      let score = appState.players.find(p => p.score == score)
      score++
      console.log(score);
    }
  }
  setActivePlayer(id) {
    const activePlayer = appState.players.find(p => p.id == id)
    appState.activePlayers = activePlayer
    console.log(activePlayer);
  }
  callService() {
    console.log('service works');
  }

  addPlayer(formData) {
    let newPlayer = new Player(formData)
    appState.players = [...appState.players, newPlayer]
  }
}

export const playersService = new PlayersService()