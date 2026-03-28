export class Neuron {
  constructor(inputSize) {
    this.weights = Array.from({ length: inputSize }, () => Math.random());
    this.bias = Math.random();
  }

  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  activate(inputs) {
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    }

    sum += this.bias;

    return this.sigmoid(sum);
  }
}
