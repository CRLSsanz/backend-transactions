//3 crear archivo .env PORT=4000 y luego instalar dotenv y requere, configurar el PORT
require("dotenv").config();

//1
const express = require("express");
//6
const mongoose = require("mongoose");
//5
const transactionRoutes = require("./routes/transactionRoutes");
//7
const cors = require("cors");
//1.1 express app
const app = express();
//7.1
app.use(cors());
//5.2
app.use(express.json());

//4 middleware
app.use((req, res, next) => {
  //para ver el metodo GET o PST seguin se este navegando
  console.log(req.path, req.method);
  next();
});

//2 routes
/*app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
}); */
//5.1 routes
app.use("/api/transaction", transactionRoutes);

//6.1 conexion mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //1.2 listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
