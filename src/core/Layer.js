import { Neuron } from "./Neuron.js";

export class Layer {
  constructor(inputSize, outputSize) {
    this.neurons = [];

    for (let i = 0; i < outputSize; i++) {
      this.neurons.push(new Neuron(inputSize));
    }
  }

  forward(inputs) {
    return this.neurons.map(neuron => neuron.activate(inputs));
  }
}
