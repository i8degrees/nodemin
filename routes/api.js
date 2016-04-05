var express = require('express');
var router = express.Router();
const exec = require('child_process').exec;
var app = express();

router.get('/', function(req, res, next) {
  res.json({response: 'OK'});
});

router.get('/reboot', function(req, res, next) {

  if(res.app.get('DEBUG') === false) {
    const child = exec('shutdown -r now',
      (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
    });
  }

  res.json({response: 'OK'});
});

module.exports = router;
