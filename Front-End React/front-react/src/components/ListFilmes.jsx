import React from "react";

const ListFilmes = ({ categoria, filmes, buttonAddFilm, onDelete }) => {
  console.log(`Categoria:`, categoria);
  console.log(`Filmes para ${categoria.nome}:`, filmes);

  const styles = {
    categoriaContainer: {
      width: "100%",
      marginTop: "50px",
    },
    categoriaHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
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
      display: "flex",
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "space-between",
      gap: "5px",
      width: "120px", 
      textAlign: "center",
    },
    filmeImage: {
      width: "80px", 
      height: "150px",
      objectFit: "cover", 
      borderRadius: "5px", 
    },
    filmeItem: {
      backgroundColor: "#222",
      padding: "10px",
      borderRadius: "5px",
      color: "#FFF",
      fontSize: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
    },
    deleteButton: {
      backgroundColor: "red",
      color: "white",
      border: "none",
      padding: "5px",
      cursor: "pointer",
      borderRadius: "5px",
      fontSize: "20px", 
      fontWeight: "bold",
    },
  };

  const imagemDefault =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIo1wwHZ4NcJRkMBFn3bJ65D1Wyp0bzvOeYQ&s";

  return (
    <div style={styles.categoriaContainer}>
      <div style={styles.categoriaHeader}>
        <h2 style={styles.categoriaTitle}>{categoria.nome}</h2>
        {buttonAddFilm}
      </div>
      {filmes.length > 0 ? (
        <div style={styles.filmeList}>
          {filmes.map((filme) => (
            <div key={filme.id} style={styles.filmeItem}>
              <img
                src={filme.imagem_url || imagemDefault}
                style={styles.filmeImage}
                onError={(e) => (e.target.src = imagemDefault)}
              />
              <p>{filme.nome}</p>

              <button
                style={styles.deleteButton}
                onClick={() => onDelete(filme.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: "#FFF" }}>Nenhum filme nesta categoria.</p>
      )}
    </div>
  );
};

export default ListFilmes;