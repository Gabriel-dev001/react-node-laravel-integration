const db = require("../../db");

class Filme {
    constructor(id, categoria_id, nome, observacao, imagem_url){
        this.id = id;
        this.categoria_id = categoria_id;
        this.nome = nome;
        this.observacao = observacao;
        this.imagem_url = imagem_url;
    }

    static async create({ categoria_id, nome, observacao, imagem_url }) {
        const [result] = await db.query("INSERT INTO filme (categoria_id, nome, observacao, imagem_url) VALUES (?)", [
            [categoria_id, nome, observacao, imagem_url] 
        ]);
        return new Filme(result.insertId, categoria_id, nome, observacao, imagem_url);
    }

    static async getAll() {
        const [rows] = await db.query("SELECT * FROM filme");
        return rows.map((row) => new Filme(row.id, row.categoria_id, row.nome, row.observacao, row.imagem_url))
    }

    static async getById(id) {
        const [rows] = await db.query("SELECT * FROM filme WHERE id = ?", [id]);
    
        if (rows.length === 0) {
            throw new Error("Filme não encontrado");
        }
    
        const { categoria_id, nome, observacao, imagem_url } = rows[0];
        return new Filme(id, categoria_id, nome, observacao, imagem_url);
    }

    static async update(id, { categoria_id, nome, observacao, imagem_url }) {
        const [rows] = await db.query("SELECT * FROM filme WHERE id = ?", [id]);
        if (rows.length === 0) {
          throw new Error("Filme não encontrado!");
        }
    
        await db.query(
            "UPDATE filme SET categoria_id = ?, nome = ?, observacao = ?, imagem_url = ? WHERE id = ?",
            [categoria_id, nome, observacao, imagem_url, id]
        );
            
        return new Filme(id, categoria_id, nome, observacao, imagem_url);
    }

    static async delete(id) {
        const [rows] = await db.query("SELECT * FROM filme WHERE id = ?", [id]);
        if (rows.length === 0) {
          throw new Error("Filme não encontrado!");
        }
        
        await db.query("DELETE FROM filme WHERE id = ?", [id]);

        return { message: "Filme deletado com sucesso" };
    }
}

module.exports = Filme;