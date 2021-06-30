
const express = require("express");


const userController = require("../controller/UserController");//use in User Controller


const tokenMiddleware = require("../middileware/IsTokenValid");

router.post("/signup", userController.signup);


router.post("/login", userController.login);


router.get("/user/:id", userController.getUserById);


router.put("/update/:id", tokenMiddleware.isTokenValid, userController.updateUser);


router.get("/token", tokenMiddleware.isTokenValid, userController.isValid);
module.exports = router;