import React, { useState } from "react";
import { CategoriaService } from "../services/CategoriaService";

function ModalCategoria({ isOpen, onClose, atualizarCategorias }) {
  const [categoriaNome, setCategoriaNome] = useState("");

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      width: "300px",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: "90%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      width: "100%",
      marginTop: "15px",
    },
    button: {
      padding: "10px 15px",
      backgroundColor: "rgb(193, 0, 0)",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      flex: 1,
      maxWidth: "120px",
    },
    closeButton: {
      padding: "10px 15px",
      backgroundColor: "gray",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      flex: 1,
      maxWidth: "120px",
    },
  };

  const handleSave = async () => {
    if (!categoriaNome.trim()) {
      alert("Por favor, insira um nome para a categoria.");
      return;
    }
    const response = await CategoriaService.create(categoriaNome);

    if (response) {
      setCategoriaNome("");
      onClose();
      atualizarCategorias();
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Cadastrar Categoria</h2>

        <input
          type="text"
          placeholder="Nome da Categoria"
          value={categoriaNome}
          onChange={(e) => setCategoriaNome(e.target.value)}
          style={styles.input}
        />

<div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleSave}>
            Salvar
          </button>
          <button
            style={{ ...styles.button, ...styles.closeButton }}
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCategoria;
