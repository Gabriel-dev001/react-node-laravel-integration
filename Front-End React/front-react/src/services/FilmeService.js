import axios from "axios";

const API_URL = "http://localhost:8080/filme"; 

export const FilmeService = {
  async create(filmeData) {
    try {
      const response = await axios.post(API_URL, filmeData);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar filme:", error);
      return null;
    }
  },

  async getAll() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return [];
    }
  },

  async deleteById(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
      return null;
    }
  },
};