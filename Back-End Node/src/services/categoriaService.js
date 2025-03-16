// Categoria chama os metogos para salvar no banco, no model
const Categoria = require("../models/categoriaModel");

class CategoriaService {
    static async create(data) {
        if (!data.nome) {
            throw new Error("O nome da categoria é obrigatório");
        }
        return await Categoria.create(data);
    }

    static async getAll() {
        return await Categoria.getAll();
    }

    static async getById(id) {
        const categoria = await Categoria.getById(id);
        if (!categoria) {
            throw new Error("Categoria não encontrada");
        }
        return categoria;
    }

    static async update(id, data) {
        const categoria = await Categoria.getById(id);
        if (!categoria) {
            throw new Error("Categoria não encontrada");
        }
        return await Categoria.update(id, data);
    }

    static async delete(id) {
        const categoria = await Categoria.getById(id);
        
        if (!categoria) {
            throw new Error("Categoria não encontrada");
        }
        return await Categoria.delete(id);
    }
}

module.exports = CategoriaService;