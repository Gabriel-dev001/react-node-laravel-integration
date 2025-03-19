const pool = require("../db");

async function testarConexao() {
    try {
        const [rows] = await pool.query("SELECT 1");
        console.log("Conectado com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar:", error);
    } finally {
        process.exit();
    }
}

testarConexao();