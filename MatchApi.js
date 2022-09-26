const express=require('express');
const mongoose=require('mongoose');
const cors =require('cors');
const bodyParser=require('body-parser');
const Team = require('./Team');

mongoose.connect('mongodb+srv://Kishan:Lila@cluster0.fnizmbf.mongodb.net/Matches?retryWrites=true&w=majority').then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

    app.get('/teams',async (req,res)=>{
        const data =await Team.find();
        
        res.send(data);
    })

    app.get('/team/:id',async (req,res)=>{
        const data =await Team.findOne({Tid:req.params.id});
        console.log(data);
        res.send(data);
    })

    app.post('/teams',async (req,res)=>{
        const tm = new Team();
        
        tm.Tid=req.body.Tid;
        tm.Team1Name=req.body.Team1Name;
        tm.Team1Img=req.body.Team1Img;
        tm.Team2Name=req.body.Team2Name;
        tm.Team2Img=req.body.Team2Img;
        tm.WinnerName=req.body.WinnerName;
        tm.MatchDate=req.body.MatchDate;

        const data = await tm.save();

        res.send(data);
    
    });

    app.put('/team/:id',async (req,res)=>{
        const data =await Team.findOne({Tid:req.params.id});

        data.Team1Name=req.body.Team1Name;
        data.Team1Img=req.body.Team1Img;
        data.Team2Name=req.body.Team2Name;
        data.Team2Img=req.body.Team2Img;
        data.WinnerName=req.body.WinnerName;
        data.MatchDate=req.body.MatchDate;

        await data.save();
        res.send(data);
    });

    app.delete('/team/:id',async (req,res)=>{
        const data =await Team.deleteOne({Tid:req.params.id});

        res.send(data);
    })

    app.listen(3030,()=>{
        console.log('server started at @localhost:3030');
    })
});