const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Tid:Number,
    Team1Name:String,
    Team1Img:String,
    Team2Name:String,
    Team2Img:String,
    WinnerName:String,
    MatchDate:Date
});

module.exports=mongoose.model("Team",schema,'Match')