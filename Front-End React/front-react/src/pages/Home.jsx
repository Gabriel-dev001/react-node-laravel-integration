/*import React, { useState, useEffect } from "react";
import ModalCategoria from "../components/ModalCategoria";
import ModalEditarCategoria from "../components/ModalEditarCategoria";
import ModalFilme from "../components/ModalFilme";
import ListFilmes from "../components/ListFilmes";
import { CategoriaService } from "../services/CategoriaService";
import { FilmeService } from "../services/FilmeService";

function Home() {
  const [isHoveredCategoria, setIsHoveredCategoria] = useState(false);
  const [isHoveredFilme, setIsHoveredFilme] = useState(false);
  const [filmes, setFilmes] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFilmeOpen, setModalFilmeOpen] = useState(false);
  const [selectedCategoriaId, setSelectedCategoriaId] = useState(null);
  const [modalEditarCategoriaOpen, setModalEditarCategoriaOpen] =
    useState(false);

  const atualizarCategorias = async () => {
    try {
      const data = await CategoriaService.getAll();
      setCategorias(data);
    } catch (error) {
      console.error("Erro ao atualizar categorias:", error);
    }
  };

  const atualizarCategoria = async (categoriaId, novoNome) => {
    try {
      const data = await CategoriaService.update(categoriaId, novoNome);
      console.log("Categoria atualizada:", data);
      await atualizarCategorias();
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error.message);
    }
  };

  const atualizarFilmes = async () => {
    try {
      const data = await FilmeService.getAll();
      console.log("Filmes carregados:", data);
      setFilmes(data);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const DeleteFilme = async (id) => {
    try {
      await FilmeService.deleteById(id);
      atualizarFilmes();
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
    }
  };

  useEffect(() => {
    atualizarCategorias();
    atualizarFilmes();
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      minHeight: "100vh",
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgb(44, 44, 46)",
      margin: 0,
      padding: "20px",
      boxSizing: "border-box",
      overflowY: "auto",
      position: "absolute",
      top: 0,
      left: 0,
    },

    title: {
      fontSize: "2rem",
      color: "#FFF",
      fontWeight: "600",
      letterSpacing: "0.7px",
      lineHeight: "1.3",
      marginBottom: "10px",
      textAlign: "left",
      fontFamily: "'Inter', sans-serif",
    },
    text: {
      fontSize: "1.2rem",
      color: "#FFF",
      fontFamily: "'Inter', sans-serif",
      fontWeight: "500",
      letterSpacing: "0.5px",
      lineHeight: "1.5",
      textAlign: "left",
    },
    buttonCategoria: {
      padding: "10px 20px",
      fontSize: "1rem",
      color: "#FFF",
      backgroundColor: isHoveredCategoria ? "rgb(255, 0, 0)" : "rgb(193, 0, 0)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
      fontWeight: "500",
      marginTop: "10px",
    },
    buttonFilm: {
      padding: "5px 20px",
      fontSize: "1rem",
      color: "#FFF",
      backgroundColor: isHoveredFilme ? "rgb(255, 0, 0)" : "rgb(193, 0, 0)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
      fontWeight: "500",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seja Bem-Vindo</h1>

      <button style={styles.buttonCategoria} onClick={() => setModalOpen(true)}>
        <span style={styles.text}>Adicionar Categoria</span>
      </button>

      <ModalCategoria
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        atualizarCategorias={atualizarCategorias}
      />

      {categorias.map((categoria) => {
        const filmesFiltrados = filmes.filter(
          (filme) => filme.categoria_id === categoria.id
        );

        return (
          <ListFilmes
            key={categoria.id}
            categoria={categoria}
            filmes={filmesFiltrados}
            buttonAddFilm={
              <button
                style={styles.buttonFilm}
                onClick={() => {
                  setSelectedCategoriaId(categoria.id);
                  setModalFilmeOpen(true);
                }}
              >
                +
              </button>
            }
            buttonEditCategoria={
              <button
                style={styles.buttonFilm}
                onClick={() => {
                  setSelectedCategoriaId(categoria.id); 
                  setModalEditarCategoriaOpen(true); 
                }}
              >
                Editar
              </button>
            }
            onDelete={DeleteFilme}
          />
        );
      })}

      <ModalFilme
        isOpen={modalFilmeOpen}
        onClose={() => setModalFilmeOpen(false)}
        atualizarFilmes={atualizarFilmes}
        categoriaId={selectedCategoriaId}
      />

      <ModalEditarCategoria
        isOpen={modalEditarCategoriaOpen} // use modalEditarCategoriaOpen
        onClose={() => setModalEditarCategoriaOpen(false)} // use setModalEditarCategoriaOpen
        atualizarCategorias={atualizarCategorias}
        categoriaId={selectedCategoriaId}
      />
    </div>
  );
}

export default Home;*/

import React, { useState, useEffect } from "react";
import ModalCategoria from "../components/ModalCategoria";
import ModalEditarCategoria from "../components/ModalEditarCategoria";
import ModalFilme from "../components/ModalFilme";
import ListFilmes from "../components/ListFilmes";
import { CategoriaService } from "../services/CategoriaService";
import { FilmeService } from "../services/FilmeService";

function Home() {
  const [isHoveredCategoria, setIsHoveredCategoria] = useState(false);
  const [isHoveredFilme, setIsHoveredFilme] = useState(false);
  const [filmes, setFilmes] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFilmeOpen, setModalFilmeOpen] = useState(false);
  const [selectedCategoriaId, setSelectedCategoriaId] = useState(null);
  const [modalEditarCategoriaOpen, setModalEditarCategoriaOpen] = useState(false);

  const atualizarCategorias = async () => {
    try {
      const data = await CategoriaService.getAll();
      setCategorias(data);
    } catch (error) {
      console.error("Erro ao atualizar categorias:", error);
    }
  };

  const atualizarCategoria = async (categoriaId, novoNome) => {
    try {
      const data = await CategoriaService.update(categoriaId, novoNome);
      console.log("Categoria atualizada:", data);
      await atualizarCategorias();
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error.message);
    }
  };

  const atualizarFilmes = async () => {
    try {
      const data = await FilmeService.getAll();
      console.log("Filmes carregados:", data);
      setFilmes(data);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const DeleteFilme = async (id) => {
    try {
      await FilmeService.deleteById(id);
      atualizarFilmes();
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
    }
  };

  useEffect(() => {
    atualizarCategorias();
    atualizarFilmes();
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      minHeight: "100vh",
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgb(44, 44, 46)",
      margin: 0,
      padding: "20px",
      boxSizing: "border-box",
      overflowY: "auto",
      position: "absolute",
      top: 0,
      left: 0,
    },

    title: {
      fontSize: "2rem",
      color: "#FFF",
      fontWeight: "600",
      letterSpacing: "0.7px",
      lineHeight: "1.3",
      marginBottom: "10px",
      textAlign: "left",
      fontFamily: "'Inter', sans-serif",
    },
    text: {
      fontSize: "1.2rem",
      color: "#FFF",
      fontFamily: "'Inter', sans-serif",
      fontWeight: "500",
      letterSpacing: "0.5px",
      lineHeight: "1.5",
      textAlign: "left",
    },
    buttonCategoria: {
      padding: "10px 20px",
      fontSize: "1rem",
      color: "#FFF",
      backgroundColor: isHoveredCategoria ? "rgb(255, 0, 0)" : "rgb(193, 0, 0)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
      fontWeight: "500",
      marginTop: "10px",
    },
    buttonFilm: {
      padding: "5px 20px",
      fontSize: "1rem",
      color: "#FFF",
      backgroundColor: isHoveredFilme ? "rgb(255, 0, 0)" : "rgb(193, 0, 0)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
      fontWeight: "500",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seja Bem-Vindo</h1>

      <button style={styles.buttonCategoria} onClick={() => setModalOpen(true)}>
        <span style={styles.text}>Adicionar Categoria</span>
      </button>

      <ModalCategoria
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        atualizarCategorias={atualizarCategorias}
      />

      {categorias.map((categoria) => {
        const filmesFiltrados = filmes.filter(
          (filme) => filme.categoria_id === categoria.id
        );

        return (
          <ListFilmes
            key={categoria.id}
            categoria={categoria}
            filmes={filmesFiltrados}
            buttonAddFilm={
              <button
                style={styles.buttonFilm}
                onClick={() => {
                  setSelectedCategoriaId(categoria.id);
                  setModalFilmeOpen(true);
                }}
              >
                +
              </button>
            }
            buttonEditCategoria={
              <button
                style={styles.buttonFilm}
                onClick={() => {
                  setSelectedCategoriaId(categoria.id); 
                  setModalEditarCategoriaOpen(true); 
                }}
              >
                Editar
              </button>
            }
            onDelete={DeleteFilme}
          />
        );
      })}

      <ModalFilme
        isOpen={modalFilmeOpen}
        onClose={() => setModalFilmeOpen(false)}
        atualizarFilmes={atualizarFilmes}
        categoriaId={selectedCategoriaId}
      />

      <ModalEditarCategoria
        isOpen={modalEditarCategoriaOpen} // use modalEditarCategoriaOpen
        onClose={() => setModalEditarCategoriaOpen(false)} // use setModalEditarCategoriaOpen
        atualizarCategorias={atualizarCategorias}
        categoriaId={selectedCategoriaId}
      />
    </div>
  );
}

export default Home;

