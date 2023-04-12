import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and meta mask is installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server *OR* meta mask is not running
  // creating our own provider
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/a9fcf0c87c2042f784a0666cb8a2b5c4"
  );

  web3 = new Web3(provider);
}

export default web3;
