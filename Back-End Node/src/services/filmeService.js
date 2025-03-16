const Filme = require("../models/filmeModel");

class FilmeService {
    static async create(data) {
        if (!data.categoria_id || !data.nome) {
            throw new Error("O ID da categoria e o nome do filme são obrigatórios!");
        }
        return await Filme.create(data);
    }

    static async getAll() {
        return await Filme.getAll();
    }

    static async getById(id) {
        const filme = await Filme.getById(id);
        if (!filme) {
            throw new Error("Filme não encontrado");
        }
        return filme;
    }    

    static async update(id, data) {
        const filme = await Filme.getById(id);
        if (!filme) {
            throw new Error("Filme não encontrado");
        }
        return await Filme.update(id, data);
    }

    static async delete(id) {
        const filme = await Filme.getById(id);
        
        if (!filme) {
            throw new Error("Filme não encontrado");
        }
        return await Filme.delete(id);
    }
}

module.exports = FilmeService;