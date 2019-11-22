var express =  require('express');
var router = express.Router();
var path = require('path');

// routes to send you to the home
router.get('/', function (req,res){
    res.sendFile(path.join(__dirname, '../public/home.html'))
});


//adding the survey page
router.get('/survey', function (req,res){
    res.sendFile(path.join(__dirname, '../public/survey.html'))
});

module.exports = router;