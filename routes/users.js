var express = require('express');
var router = express.Router();
var shell = require('shelljs');


/* GET users listing. */
router.get('/', function(req, res, next) {
  // let output = shell.exec(`cat output.txt`, {async: false}).stdout;
  let output = shell.exec(`evmosd keys add test --keyring-backend test --log_format json --output json`, {async: false}).stdout;
  output = JSON.parse(output)
  console.log(output)
  let remove = shell.exec(`rm -r ~/.evmosd/keyring-test/`, {async: false}).stdout;
  let mnemonicArr = output.mnemonic.split(" ");
  console.log(mnemonicArr)
  res.send(
      {
        "address": output.address,
        "mnemonic": mnemonicArr
      }
  );
});

module.exports = router;
