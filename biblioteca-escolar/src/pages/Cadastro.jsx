import { useState, useContext } from "react";

import { BookContext } from "../contexts/BookContext";

import "../styles/cadastro.css";

function Cadastro() {
  const { addBook } = useContext(BookContext);

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [isbn, setIsbn] = useState("");
  const [ano, setAno] = useState("");

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!titulo || !autor || !categoria || !isbn || !ano) {
      setErro("Preencha todos os campos.");
      setSucesso("");
      return;
    }

    if (isbn.length < 10) {
      setErro("ISBN inválido.");
      setSucesso("");
      return;
    }

    if (Number(ano) < 1500 || Number(ano) > new Date().getFullYear()) {
      setErro("Ano inválido.");
      setSucesso("");
      return;
    }

    addBook({
      titulo,
      autor,
      categoria,
      isbn,
      ano,
    });

    setErro("");
    setSucesso("Livro cadastrado com sucesso!");

    setTitulo("");
    setAutor("");
    setCategoria("");
    setIsbn("");
    setAno("");
  }

  return (
    <div className="cadastro-container">
      <h1>Cadastrar Novo Livro</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />

        <input
          type="number"
          placeholder="Ano de Publicação"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />

        {erro && <p className="erro">{erro}</p>}

        {sucesso && <p className="sucesso">{sucesso}</p>}

        <button type="submit">Cadastrar Livro</button>
      </form>
    </div>
  );
}

export default Cadastro;
