import React, { useState, useEffect} from "react";
import Modal from "../components/ModalCategoria";
import ListFilmes from"../components/ListFilmes"
import { CategoriaService } from "../services/CategoriaService";

function Home() {
  const [categorias, setCategorias] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isHoveredCategoria, setIsHoveredCategoria] = useState(false);
  const [isHoveredFilme, setIsHoveredFilme] = useState(false); 

  const atualizarCategorias = async () => {
    try {
      const data = await CategoriaService.getAll();
      setCategorias(data);
    } catch (error) {
      console.error("Erro ao atualizar categorias:", error);
    }
  };

  useEffect(() => {
    atualizarCategorias();
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
      backgroundColor: isHoveredCategoria ? "rgb(255, 0, 0)" : "rgb(193, 0, 0)", // Aplica o hover corretamente
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
      backgroundColor: isHoveredFilme ? "rgb(255, 0, 0)" : "rgb(193, 0, 0)", // Aplica o hover corretamente
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

      <button
        style={styles.buttonCategoria}
        onMouseEnter={() => setIsHoveredCategoria(true)}
        onMouseLeave={() => setIsHoveredCategoria(false)}
        onClick={() => setModalOpen(true)}
      >
       <span style={styles.text}>Adicionar Categoria</span>
      </button>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        atualizarCategorias={atualizarCategorias}
      />

      {/* Exibição das Categorias e Filmes */}
      {categorias.map((categoria) => (
        <ListFilmes key={categoria.id} categoria={categoria}
        buttonAddFilm={
          <button
            style={styles.buttonFilm}
            onMouseEnter={() => setIsHoveredFilme(true)}
            onMouseLeave={() => setIsHoveredFilme(false)}
            onClick={() => console.log(`Adicionar filme`)}>
            +
      </button>
        } />
      ))}
      
    </div>
  );
}

export default Home;
