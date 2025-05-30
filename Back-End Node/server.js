const cors = require("cors");
const express = require("express");
const categoriaRoutes = require("./src/routes/categoriaRoutes");
const filmeRoutes = require("./src/routes/filmeRoutes");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/categoria", categoriaRoutes);
app.use("/filme", filmeRoutes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


//Para rodar o Projeto, usamos: 
//  npm run dev 

//Explicar o porque eu optei a não usar uma ORM