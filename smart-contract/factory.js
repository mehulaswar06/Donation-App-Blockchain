import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x89B5CD9F27D2744bE29A8c45F877f67C12554F58"
);

export default instance;
