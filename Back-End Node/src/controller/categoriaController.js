const CategoriaService = require("../services/categoriaService");

class CategoriaController {
    static async create(req, res) {
        try {
            const categoria = await CategoriaService.create(req.body);
            res.status(201).json(categoria);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const categorias = await CategoriaService.getAll();
            res.json(categorias);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const categoria = await CategoriaService.getById(id);
            res.json(categoria);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const categoria = await CategoriaService.update(id, req.body);
            res.json(categoria);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await CategoriaService.delete(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = CategoriaController;