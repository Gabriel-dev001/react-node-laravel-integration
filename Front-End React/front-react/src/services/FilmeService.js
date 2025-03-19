import axios from "axios";
import { API_ROUTES } from "../routes/ApisRoutes";

export const FilmeService = {
  async create(filmeData) {
    try {
      const response = await axios.post(API_ROUTES.FILME, filmeData);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar filme:", error);
      return null;
    }
  },

  async getAll() {
    try {
      const response = await axios.get(API_ROUTES.FILME);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return [];
    }
  },

  async deleteById(id) {
    try {
      const response = await axios.delete(`${API_ROUTES.FILME}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
      return null;
    }
  },
};