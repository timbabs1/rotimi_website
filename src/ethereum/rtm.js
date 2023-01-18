import web3 from "./web3";

import compiledRotimi from "./build/Rotimi_Smart_Contract.json";

const instance = new web3.eth.Contract(
  compiledRotimi,
  process.env.REACT_APP_TEST_NET_ADDRESS
  //'0x080C0FE056745DA3bcdB13c99d576A94CFF2495c',
);
console.log("!!!! Test logg", process.env.REACT_APP_TEST_NET_ADDRESS);

export default instance;
