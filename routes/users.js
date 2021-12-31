var express = require('express');
var router = express.Router();
var shell = require('shelljs');


/* GET users listing. */
router.get('/', function(req, res, next) {
  // let output = shell.exec(`cat output.txt`, {async: false}).stdout;
  let output = shell.exec(`evmosd keys add test --keyring-backend test`, {async: false}).stdout;
  let remove = shell.exec(`rm -r .evmosd/keyring-test/`, {async: false}).stdout;
  output = output.replace(/\n/g, " ");
  let arr = output.split(" ");
  let mnemonic = [];
  for (i = arr.length -1; i > arr.length -25 ;i--) {
    mnemonic.push(arr[i])
  }
  mnemonic.reverse()
  console.log(mnemonic)
  res.send(
      {
        "address": arr[11],
        "mnemonic": mnemonic
      }
  );
});

module.exports = router;
