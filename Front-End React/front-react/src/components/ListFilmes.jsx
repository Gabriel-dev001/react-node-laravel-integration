import React from "react";

const ListFilmes = ({ categoria, buttonAddFilm }) => {
  const styles = {
    categoriaContainer: {
      width: "100%",
      marginTop: "50px",
    },
    categoriaHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Deixa o botão ao lado
        width: "20%",
    },
    categoriaTitle: {
      fontSize: "1.5rem",
      color: "#FFF",
      fontWeight: "600",
      marginBottom: "10px",
    },
    filmeList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    filmeItem: {
      backgroundColor: "#222",
      padding: "10px",
      borderRadius: "5px",
      color: "#FFF",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.categoriaContainer}>
      <div style={styles.categoriaHeader}>
        <h2 style={styles.categoriaTitle}>{categoria.nome}</h2>
        {buttonAddFilm}
      </div>
      {categoria.filmes && categoria.filmes.length > 0 && (
        <div style={styles.filmeList}>
          {categoria.filmes.map((filme) => (
            <div key={filme.id} style={styles.filmeItem}>
              {filme.titulo}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListFilmes;
