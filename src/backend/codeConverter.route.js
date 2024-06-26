import {Router} from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv  from 'dotenv'

dotenv.config(); 

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
console.log(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const router = Router();


router.post('/', async (req, res) => {
    const { text, targetLanguage } = req.body;
    const prompt  = `Translate the following Code to ${targetLanguage} code:\n\n${text}`;
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return res.json({ convertedText: text.replace(/```(.*?)```/gs, '') });
  }
  catch(e){
    console.log(e);
  }
})

export default router;

