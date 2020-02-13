const express=require('express');
const app=express();
const cors = require("cors");
const port = process.env.PORT || 3001;

const phones = require('./seed/phones')

app.use(cors());
app.listen(port, function() {
  console.log("Runnning on " + port);
});

app.get('/phones',function(req,res)
{
  setTimeout(() => {
    res.json(phones);
  }, 500);
});
