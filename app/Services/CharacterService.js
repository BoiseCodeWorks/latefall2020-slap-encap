import { ProxyState } from "../AppState.js";


class CharacterService {
  // punch() {
  //   let character = ProxyState.character
  //   character.health -= 10
  //   ProxyState.character = character
  // }
  // kick() {
  //   let character = ProxyState.character
  //   character.health -= 15
  //   ProxyState.character = character
  // }
  // slap() {
  //   let character = ProxyState.character
  //   character.health -= 1
  //   ProxyState.character = character
  // }
  attack(attackName) {
    let character = ProxyState.character
    character.health -= character.attacks[attackName]
    character.health = character.health < 0 ? 0 : character.health
    ProxyState.character = character
  }
  constructor() {
    console.log("hello from the character service");
  }
}


export const characterService = new CharacterService()