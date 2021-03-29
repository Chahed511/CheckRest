//importer express
const express = require("express");
//instancier les fonctionnaliter d'epress
const app = express();
//import dotenv pour utiliser les varriable d'enverenment 
require("dotenv").config();
//importer la fonction pour assurer la connection 
const dbConnect = require("./config/connectDB");
/*connect DB*/
dbConnect();

//body parser global middelware 

app.use(express.json());

//create route 

app.use("/api/contact", require("./routes/contacts"));
// create serveur 
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${PORT}` )
);
