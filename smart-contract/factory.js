import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe82d0F458F3D53765478B30b8eB9032De58A6069"
);

export default instance;
