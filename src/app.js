const express = require("express");
const app = express () ;
const products = require("./routes/products");

 /* config */
app.use(express.urlencoded ({extended : false}));
app.use(express.json());

  /* rutas */
app.use("/productos", products);



app.listen(3005 , () => console.log("server puerto 3005"));