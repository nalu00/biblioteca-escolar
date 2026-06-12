function SearchBar({ busca, setBusca }) {
  return (
    <input
      type="text"
      placeholder="Pesquisar livro..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
  );
}

export default SearchBar;
