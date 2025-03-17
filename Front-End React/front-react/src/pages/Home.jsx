import React, { useState } from "react";
import Modal from "../components/ModalCategoria";

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); //

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgb(44, 44, 46)",
      margin: 0,
      padding: "20px",
      boxSizing: "border-box",
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
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      color: "#FFF",
      backgroundColor: isHovered ? "rgb(255, 0, 0)" : "rgb(193, 0, 0)", // Aplica o hover corretamente
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
        style={styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setModalOpen(true)}
      >
       <span style={styles.text}>Adicionar Categoria</span>
      </button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}/>
      
    </div>
  );
}

export default Home;
