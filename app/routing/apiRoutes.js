var express =  require('express');
var router = express.Router();

// link in the friendsData array
var friendsData = require('../data/friends.js');

// routes for the api - survey and friends
router.get('/survey', function (req,res){
    res.json(friendsData)
});

router.get('/friends', function (req,res){
    res.json(friendsData)
});


// route that creates a new friend based on who filled out the survey
router.post('/friends', function (req, res){
    var newFriend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: []
      };
      
      
    console.log('friends', friendsData);
    var totalDifference;
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: Infinity
    }

      for (let i = 0; i < friendsData.length - 1; i++) {
        totalDifference = 0;
        var currentFriend = friendsData[i];
        var absoluteDifference = [];
        for (let j = 0; j < currentFriend.scores.length; j++) {
        
           var currentUser = friendsData[friendsData.length - 1];
           var answerDifference = Math.abs(currentFriend.scores[j] - currentUser.scores[j]);
           absoluteDifference.push(answerDifference)
        }
        
        var reducedDifference = absoluteDifference.reduce(reduceFunction)
        console.log('red', reducedDifference);
        if (reducedDifference < bestMatch.friendDifference){
            bestMatch.name = friendsData[i].name;
            bestMatch.photo = friendsData[i].photo;
        }  
      }
    friendsData.push(newFriend);
});

function reduceFunction(total, num) {
    return total + num;
  }

module.exports = router;