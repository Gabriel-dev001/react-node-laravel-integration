const FilmeService = require("../services/filmeService");

class filmeController{
    static async create(req, res) {
        try {
            const filme = await FilmeService.create(req.body);
            res.status(201).json(filme);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const filmes = await FilmeService.getAll();
            res.json(filmes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const filme = await FilmeService.getById(id);
            res.json(filme);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const filme = await FilmeService.update(id, req.body);
            res.json(filme);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await FilmeService.delete(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = filmeController;