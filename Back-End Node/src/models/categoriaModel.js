const db = require("../../db");

class Categoria {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
  }

  static async create({ nome }) {
    const [result] = await db.query("INSERT INTO categoria (nome) VALUES (?)", [
      nome,
    ]);
    return new Categoria(result.insertId, nome);
  }

  static async getAll() {
    const [rows] = await db.query("SELECT * FROM categoria");
    return rows.map((row) => new Categoria(row.id, row.nome));
  }

  static async getById(id) {
    const [rows] = await db.query("SELECT * FROM categoria WHERE id = ?", [id]);

    if (rows.length === 0) {
        throw new Error("Categoria não encontrada");
    }

    const { nome } = rows[0];
    return new Categoria(id, nome);
}

  static async update(id, { nome }) {
    const [rows] = await db.query("SELECT * FROM categoria WHERE id = ?", [id]);
    if (rows.length === 0) {
      throw new Error("Categoria não encontrada!");
    }

    await db.query("UPDATE categoria SET nome = ? WHERE id = ?", [nome, id]);
    return new Categoria(id, nome);
  }

  static async delete(id) {
    const [rows] = await db.query("SELECT * FROM categoria WHERE id = ?", [id]);
    if (rows.length === 0) {
      throw new Error("Categoria não encontrada!");
    }
    
    await db.query("DELETE FROM categoria WHERE id = ?", [id]);
    
    return { message: "Categoria deletada com sucesso" };
  }
}

module.exports = Categoria;
