import axios from "axios";
import { API_ROUTES } from "../routes/ApisRoutes"; // Importamos as rotas

export const CategoriaService = {
  create: async (categoriaNome) => {
    try {
      const response = await axios.post(API_ROUTES.CATEGORIA, { nome: categoriaNome });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Erro ao cadastrar categoria");
    }
  },

  getAll: async () => {
    try {
      const response = await axios.get(API_ROUTES.CATEGORIA);
      return response.data; // Retorna a lista de categorias
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      return [];
    }
  },
};
