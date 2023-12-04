import express from 'express';
import { generateFiles } from './generateFiles.js'
import { executeCpp } from './executeCpp.js';
import cors from 'cors'
import { executePy } from './executepy.js';
import {executeJava} from './executeJava.js'

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({origin:'http://localhost:5173',credentials:true}));


app.use(express.json())

app.listen(PORT,()=>{
    console.log("chl gya");
})

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    return res.json({hello:"Hello World"})
})

app.post('/run',async (req, res)=>{
    const {language,code} = req.body;
    if(code === undefined){
        return res.status(404).json({success:false,error:"empty file"})
    } 
    try{
        const filepath = await generateFiles(language,code)
        let output;
        if(language==='cpp'){
            output = await executeCpp(filepath);
        }
        else if(language==='py'){
            output = await executePy(filepath);
        }
        else{
            output = await executeJava(filepath);
        }
        return res.json({filepath,output});
    }catch(err){
        res.status(500).json(err);
    }
})

