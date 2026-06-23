import { useContext, useEffect, useState } from "react";

import { BookContext } from "../contexts/BookContext";
import StatsCard from "../components/StatsCard";
import { api } from "../services/api";

import "../styles/home.css";

function Home() {
  const { books } = useContext(BookContext);

  const [dadosApi, setDadosApi] = useState([]);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const response = await api.get("/users");

        setDadosApi(response.data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    }

    carregarUsuarios();
  }, []);

  const totalLivros = books.length;

  const disponiveis = books.filter(
    (book) => book.status === "Disponível",
  ).length;

  const emprestados = books.filter(
    (book) => book.status === "Emprestado",
  ).length;

  const categorias = [...new Set(books.map((book) => book.categoria))].length;

  const taxaDisponibilidade =
    totalLivros > 0 ? ((disponiveis / totalLivros) * 100).toFixed(0) : 0;

  return (
    <div className="home-container">
      <h1>Sistema de Biblioteca Escolar</h1>

      <p className="descricao-home">
        Gerencie livros, empréstimos e devoluções de forma simples e organizada.
      </p>

      <p className="descricao-secundaria">
        Este sistema permite cadastrar livros, controlar empréstimos e consultar
        o acervo da biblioteca escolar.
      </p>

      <div className="stats-grid">
        <StatsCard titulo="📚 Total de Livros" valor={totalLivros} />

        <StatsCard titulo="✅ Disponíveis" valor={disponiveis} />

        <StatsCard titulo="📖 Emprestados" valor={emprestados} />

        <StatsCard titulo="🏷️ Categorias" valor={categorias} />
      </div>

      <div className="taxa-card">
        <h3>Taxa de Disponibilidade</h3>

        <p>{taxaDisponibilidade}%</p>
      </div>

      <h2 className="section-title">Últimos Livros Cadastrados</h2>

      <div className="books-grid">
        {books
          .slice(-3)
          .reverse()
          .map((book) => (
            <div key={book.id} className="book-card">
              <h3>📖 {book.titulo}</h3>

              <p>
                <strong>Autor:</strong> {book.autor}
              </p>

              <p>
                <strong>Categoria:</strong> {book.categoria}
              </p>

              <p>
                <strong>Status:</strong> {book.status}
              </p>
            </div>
          ))}
      </div>

      <h2 className="section-title">Integração com API REST</h2>

      <div className="users-grid">
        {dadosApi.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>

            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
