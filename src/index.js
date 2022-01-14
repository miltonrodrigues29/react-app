import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";

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
const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
  {
    id: 3,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life ",
    author: "Hector Garcia",
  },
  {
    id: 4,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title:
      "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! ",
    author: "Robert T. Kiyosaki",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, author, title, id } = props.book;

  return (
    <article className="book">
      <h1>{id}</h1> <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
