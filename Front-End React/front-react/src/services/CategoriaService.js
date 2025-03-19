import axios from "axios";
import { API_ROUTES } from "../routes/ApisRoutes"; // Importamos as rotas

export const CategoriaService = {
  async create (categoriaNome){
    try {
      const response = await axios.post(API_ROUTES.CATEGORIA, { nome: categoriaNome });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Erro ao cadastrar categoria");
    }
  },

  async getAll (){
    try {
      const response = await axios.get(API_ROUTES.CATEGORIA);
      return response.data; 
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      return [];
    }
  },
};