import express from 'express';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname,'client')))

app.listen(PORT,()=>{
    console.log(`Current port ${PORT}`);
})

app.get('/getData',(req,res)=>{
    // console.log(JSON.parse(fs.readFileSync(path.resolve(__dirname,'client',"data.json"))))
    res.end(fs.readFileSync(path.resolve(__dirname,'client',"data.json")))
})

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})