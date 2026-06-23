import { Link } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>📚 Biblioteca Escolar</h2>

      <div className="nav-links">
        <Link to="/">Início</Link>

        <Link to="/cadastro">
          Cadastrar Livro
        </Link>

        <Link to="/listagem">
          Listagem
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;