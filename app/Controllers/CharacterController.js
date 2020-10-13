import { ProxyState } from "../AppState.js";
import { characterService } from '../Services/CharacterService.js'

// private
function _draw() {
  let character = ProxyState.character
  document.getElementById("character").innerHTML = /*html*/`
  <h1>Bob</h1>
  <h1>${character.health}</h1>
  `
}
function _logTheCharacterChanged() {
  console.log("The character changed!");
}

// public
export default class CharacterController {
  constructor() {
    console.log("Hello from the character Controller");
    ProxyState.on("character", _draw)
    ProxyState.on("character", _logTheCharacterChanged)
    _draw()
    setTimeout(() => { this.attack('kick') }, 3000)
  }

  // slap() {
  //   // console.log("slapped bob!1111!!11!");
  //   characterService.slap()
  // }

  // kick() {
  //   characterService.kick()
  // }

  // punch() {
  //   characterService.punch()
  // }

  attack(attackName) {
    characterService.attack(attackName)
  }

}