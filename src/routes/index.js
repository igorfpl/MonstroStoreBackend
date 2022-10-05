const express = require ("express");
const users = require("./users.routes");
const usersauth = require("./usersautentication.routes");
const products = require("./products.routes");
const router = express.Router();

router.use(users);
router.use(usersauth);
router.use(products);

module.exports=router;