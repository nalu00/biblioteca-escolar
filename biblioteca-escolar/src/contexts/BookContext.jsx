import { createContext, useState, useEffect } from "react";

const BookContext = createContext();

function BookProvider({ children }) {
  const [books, setBooks] = useState(() => {
    const livrosSalvos = localStorage.getItem("books");

    if (livrosSalvos) {
      return JSON.parse(livrosSalvos);
    }

    return [
      {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        categoria: "Romance",
        isbn: "9788535914849",
        ano: "1899",
        status: "Disponível",
      },
      {
        id: 2,
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Infantil",
        isbn: "9788595081512",
        ano: "1943",
        status: "Emprestado",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function addBook(book) {
    setBooks((prev) => [
      ...prev,
      {
        ...book,
        id: Date.now(),
        status: "Disponível",
      },
    ]);
  }

  function removeBook(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }

  function toggleStatus(id) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              status:
                book.status === "Disponível" ? "Emprestado" : "Disponível",
            }
          : book,
      ),
    );
  }

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        removeBook,
        toggleStatus,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export { BookContext, BookProvider };
