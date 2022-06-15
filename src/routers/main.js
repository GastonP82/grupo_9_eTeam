const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get('/', mainController.home);
router.get("/shopCart", mainController.shopCart);
router.get("/register", mainController.register);
router.get("/mtb", mainController.mtb);
router.get("/road", mainController.road);
router.get("/city", mainController.city);
router.get("/kids", mainController.kids);
router.get("/track", mainController.track);

module.exports = router;
