import "../styles/card.css";

function BookCard({ livro, onToggleStatus, onRemove }) {
  return (
    <div className="book-card">
      <h3>{livro.titulo}</h3>

      <p>
        <strong>Autor:</strong> {livro.autor}
      </p>

      <p>
        <strong>Categoria:</strong> {livro.categoria}
      </p>

      <p>
        <strong>ISBN:</strong> {livro.isbn}
      </p>

      <p>
        <strong>Ano:</strong> {livro.ano}
      </p>

      <p>
        <strong>Status:</strong> {livro.status}
      </p>

      <div className="card-buttons">
        <button className="btn-status" onClick={() => onToggleStatus(livro.id)}>
          {livro.status === "Disponível" ? "Emprestar" : "Devolver"}
        </button>

        <button
          className="btn-delete"
          onClick={() => {
            const confirmar = window.confirm(
              "Deseja realmente excluir este livro?",
            );

            if (confirmar) {
              onRemove(livro.id);
            }
          }}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default BookCard;
