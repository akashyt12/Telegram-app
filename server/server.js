const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/predict",(req,res)=>{
    const seq = req.body.sequence;
    const pred = Math.floor(Math.random()*10);
    res.json({prediction:pred});
});

app.listen(5000,()=>{
    console.log("Server running on 5000");
});
