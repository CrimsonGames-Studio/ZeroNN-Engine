import { NeuralNetwork } from "./core/NeuralNetwork.js";

const nn = new NeuralNetwork([2, 2, 1]);

document.getElementById("run").onclick = () => {
  const output = nn.predict([1, 0]);
  console.log("Output:", output);
};
