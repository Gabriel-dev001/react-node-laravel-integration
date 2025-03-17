import axios from "axios";
import { API_ROUTES } from "../routes/ApisRoutes"; // Importamos as rotas

export const CategoriaService = {
  create: async (categoriaNome) => {
    try {
      const response = await axios.post(API_ROUTES.CATEGORIES, { nome: categoriaNome });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Erro ao cadastrar categoria");
    }
  },
};
