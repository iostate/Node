const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/564c9e0b4a174a3f947a399674a84827"));
var version = web3.version.api;

$.getJSON(
  "https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address=0x2e150637263745DAC19e0BB90B4348154bCd811f",
  function (data) {
    var contractABI = "";
    // contractABI = JSON.parse(data.result);
    console.log(data);
    // if (contractABI != "") {
    //   var MyContract = web3.eth.contract(contractABI);
    //   var myContractInstance = MyContract.at("0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359");
    //   var result = myContractInstance.memberId("0xfe8ad7dd2f564a877cc23feea6c0a9cc2e783715");
    //   console.log("result1 : " + result);
    //   var result = myContractInstance.members(1);
    //   console.log("result2 : " + result);
    // } else {
    //   console.log("Error");
    // }
  }
);
