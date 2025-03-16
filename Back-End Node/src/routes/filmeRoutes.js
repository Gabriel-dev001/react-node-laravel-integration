const express = require("express");
const filmeController = require("../controller/filmeController");

const router = express.Router();

router.post("/", filmeController.create);
router.get("/", filmeController.getAll);
router.get("/:id", filmeController.getById);
router.put("/:id", filmeController.update);
router.delete("/:id", filmeController.delete);

module.exports = router;