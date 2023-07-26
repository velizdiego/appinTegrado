const fs = require("fs");
const path = require("path");

const ruta = path.resolve(__dirname, "../data/products.json");
const dataJSON = fs.readFileSync(ruta, {encoding: "utf-8"});
let products = JSON.parse(dataJSON);


const controllers =  {
    all: (req, res) =>{
        res.json(products)

    },
    one : (req, res) => {
        let id = +req.params.id;
        let producto = products.find(producto => producto.id == id);
        res.json(producto)
    },
    create : (req, res) => {
        let product = {};
        if  (!req.body.name) {
            return res.json({mgs :"hace falta el campo name" })
        }
        product.id = products.lenght +1;
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.image = req.body.image;

        products.push(product);

        let productsJson = JSON.stringify(products);

        fs.writeFileSync(ruta, productsJson,  { encoding: "utf8"});
         

        res.status(201).json(product);

        
    },
}

module.exports= controllers;