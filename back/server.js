import express from "express"
import {generateUploadURL} from './s3.js'
import cors from "cors";
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const imageData = require("./public/ArtData")

const app = express();

app.use(cors());
app.use(express.static('front'))

app.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({url});
})

app.get('/imageData', async (req, res) =>{
    console.log("Image Data Accessed")
    res.send(imageData);
    
})


app.listen(8080, () => console.log("Listening on port 8080"));