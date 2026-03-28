import { Layer } from "./Layer.js";

export class NeuralNetwork {
  constructor(structure) {
    this.layers = [];

    for (let i = 0; i < structure.length - 1; i++) {
      this.layers.push(new Layer(structure[i], structure[i + 1]));
    }
  }

  predict(inputs) {
    let output = inputs;

    for (let layer of this.layers) {
      output = layer.forward(output);
    }

    return output;
  }
}
