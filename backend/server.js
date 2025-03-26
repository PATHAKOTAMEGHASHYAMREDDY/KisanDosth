const express=require('express');
require('dotenv').config();
const cors=require('cors');
const mongoose=require('mongoose');
const server=express();
server.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true,})
    .then(()=>console.log("Mongo db connected"))
    .catch((error)=>console.log(error));

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    