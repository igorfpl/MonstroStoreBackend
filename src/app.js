const express = require("express"); 
const app = express();
const router = require("./routes");

app.use(express.json());
app.use(router);

app.listen(5000 , () =>{
  console.log("Server esta na porta 5000");
})

