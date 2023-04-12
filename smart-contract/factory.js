import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5eF23bf4a33D5119ca056494554807E8e81f67c7"
);

export default instance;
