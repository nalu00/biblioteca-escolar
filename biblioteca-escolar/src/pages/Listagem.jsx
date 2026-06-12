import { useContext, useState, useEffect } from "react";

import { BookContext } from "../contexts/BookContext";

import { api } from "../services/api";

import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

import "../styles/listagem.css";

function Listagem() {
  const { books, removeBook, toggleStatus } = useContext(BookContext);

  const [busca, setBusca] = useState("");

  const [filtroStatus, setFiltroStatus] = useState("");

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const response = await api.get("/users");

        setUsuarios(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    carregarUsuarios();
  }, []);

  const livrosFiltrados = books.filter((livro) => {
    const buscaMatch = livro.titulo.toLowerCase().includes(busca.toLowerCase());

    const statusMatch =
      filtroStatus === "" ? true : livro.status === filtroStatus;

    return buscaMatch && statusMatch;
  });

  return (
    <div className="listagem-container">
      <h1>Livros Cadastrados</h1>

      <p className="subtitulo-listagem">
        Consulte, filtre e gerencie os livros cadastrados.
      </p>

      <div className="filtros">
        <SearchBar busca={busca} setBusca={setBusca} />

        <select
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value="">Todos</option>

          <option value="Disponível">Disponível</option>

          <option value="Emprestado">Emprestado</option>
        </select>
      </div>

      <div className="books-grid">
        {livrosFiltrados.map((livro) => (
          <BookCard
            key={livro.id}
            livro={livro}
            onToggleStatus={toggleStatus}
            onRemove={removeBook}
          />
        ))}
      </div>

      <section className="api-section">
        <h2>Usuários da API REST</h2>

        {usuarios.slice(0, 4).map((user) => (
          <div key={user.id} className="user-card">
            <p>
              <strong>{user.name}</strong>
            </p>

            <p>{user.email}</p>

            <p>{user.address.city}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Listagem;
