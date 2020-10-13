import CharacterController from "./Controllers/CharacterController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  characterController = new CharacterController()
}

window["app"] = new App();
