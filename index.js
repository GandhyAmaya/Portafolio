const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req, res)=>{
  res.send('hola mi server express')
});


app.listen(port,()=>{
  console.log('Mi port'+port);
});
