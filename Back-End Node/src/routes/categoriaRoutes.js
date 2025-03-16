const express = require("express");
const CategoriaController = require("../controller/categoriaController");

const router = express.Router();

router.post("/", CategoriaController.create);
router.get("/", CategoriaController.getAll);
router.get("/:id", CategoriaController.getById);
router.put("/:id", CategoriaController.update);
router.delete("/:id", CategoriaController.delete);

module.exports = router;