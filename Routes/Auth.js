
const express = require('express');
const Router = express.Router();
const validator = require('validator');
const bcrypt = require('bcrypt');
const { connectdb, getdb } = require('../db');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');
const secretKey='SECRET';



Router.post('/signUp', async (req, res) => {
    try {
        const userCollections = getdb('user_1');
        // console.log(db_1);

        let email = req.body.email;
        let password = req.body.password;
        let score=0;
        
        if (!validator.isEmail(email)) {
            return res.status(400).send("Enter a Valid Email");
        }

        let user = await userCollections.findOne({ email: email });
        if(user) return res.status(400).json({"error":"EmailId Alerady Exists !!! "})
        // const response = [email1, password];
        const hashPassword = await bcrypt.hash(password, 12);
        // connectDB(email,password);
        const payload={
            email: email,  
            password: hashPassword
        }
        const token=jwt.sign(payload,secretKey,{expiresIn:'1h'});

        await userCollections.insertOne({
            email: email,  
            password: hashPassword,
            score:score
        })  


        return res.json({email:email,password:hashPassword,token:token});

        
    } catch (error) {
        console.log(error )
        res.status(400).send("error :!!! " + error)
    }
});

Router.post('/logIn', async (req, res) => {
    try {
        const userCollections = getdb('user_1');
        let email1 = req.body.email;
        let password = req.body.password;
        if (!validator.isEmail(email1)) return res.status(400).json({"error":"Enter a Valid Email"});
        let user = await userCollections.findOne({ email: email1 });
        if (!user) return res.status(200).json({"error":"User Dosen't exits !!!"});

       

        const check = await bcrypt.compare(password, user.password);
        if (!check) {
            console.log("Passwords do not match:", password, user.password); 
            return res.status(401).json({"error":"Invalid Credentials !!!"});
        }


        const payload={
            email: email1,  
            password: password
        }

        const token=jwt.sign(payload,secretKey,{expiresIn:'1h'})
        return res.json({ token:token });
    } catch (error) {
        console.log(error);
    }

})

Router.get('/profile',async (req,res)=>{
    const token=req.headers['authorization'].split(' ')[1];
    const decoded=jwt.verify(token,'SECRET');

    const email=decoded.email;
    const userCollection=getdb('user_1');

    const user=await userCollection.findOne({email:email});
        if(!user) return res.json({error:"user do not exists !!!"})
        return res.json({email:user.email,score:user.score});

})

Router.put('/updateScore',async (req,res)=>{
    const token =req.headers['authorization'].split(' ')[1];

    const decoded=jwt.verify(token,'SECRET');

    const email=decoded.email;
    const newScore=req.body.score;
    if(newScore===undefined || newScore===null){
        return res.status(400).json({error :"Score must be provided !!! "});
    }
    try{
        const userCollection=getdb('user_1');
        const result=await userCollection.updateOne(
            {email:email},
            {$set:{score:newScore}}
        );
        if(result.modifiedCount>0){
            res.status(200).json({'message':'score was updated !!!'});
        }
        else {
            res.status(400).json({'error':'score was not updated !!!'});
        }
    }
    catch(error){
        res.status(500).json({error:error});
    }
})

module.exports = Router;