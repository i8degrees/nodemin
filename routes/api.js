var express = require('express');
var router = express.Router();
var app = express();
const exec = require('child_process').exec;

router.get('/reboot', function(req, res, next) {

  if(app.get('DEBUG') === true) {
    console.log('DEBUG');
    return;
  }

  const child = exec('shutdown -r now',
    (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
  });

  res.json('OK');
});

module.exports = router;
