const express = require("express");
const router = express.Router();
const controllers = require("../controllers/productsControllers");



router.get("/all" , controllers.all );
router.get("/:id", controllers.one);
router.post("/create", controllers.create);
     

module.exports= router;