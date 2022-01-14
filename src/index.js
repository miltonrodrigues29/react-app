import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";
import { books } from "./books";
import Book from "./Book";

// JSX rules
//return single element //should have only one parent element
//use camelcase for html attribute
//className instead of class
//close every element
//formatting
//setup vars
// const names = ["milton", "rodrigues"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
