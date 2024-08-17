const express=require('express');
const app=express();
const cors=require('cors');
const port=5500;
const jwt=require('jsonwebtoken')

const secretKey='SECRET';

app.use(cors({
    origin: ['http://localhost:3000','https://karnsaty1.github.io'] ,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials:true,
}))

const {connectdb}=require('./db');

connectdb().then(()=>{
   app.use(express.json())
    app.use('/auth/user',require('./Routes/Auth'));
    
    app.get('/',(req,res)=>{
    res.send("HELLO WORLD");
    })

    app.get('/Game/:id', (req, res) => {
       try {


        const token = req.headers['authorization'].split(' ')[1];
    
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized access' });
            }
    
            // Token is valid, proceed to render the game or send game data
            return res.status(200).json({message:"Verified User !!!"});
        });
        
       } catch (error) {
        console.log(error);
       }
    });

    app.get('game/:id',(req,res)=>{
        return res.redirect('http://localhost:3000/game/:id')
    })
    
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
    })
        
}).catch((error)=>{
   console.log("error : "+error);
})
  