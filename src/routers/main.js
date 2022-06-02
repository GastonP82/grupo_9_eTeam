const express = require("express");

const mainController = require("../../controllers/mainController");

const router = express.Router();

router.get('/', mainController.home);
router.get("/carro", mainController.carro);
router.get("/company", mainController.company);
router.get("/MTB", mainController.MTB);
router.get("/register", mainController.register);
router.get("/road", mainController.road);
router.get("/login", mainController.login);

module.exports = router;
