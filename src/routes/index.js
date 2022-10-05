const express = require ("express");
const users = require("./users.routes");
const usersauth = require("./usersautentication.routes");
const router = express.Router();

router.use(users);
router.use(usersauth);


module.exports=router;