import React from "react";

const Book = (props) => {
  const { img, author, title, id } = props.book;
  const clickHandler = (e) => {
    alert("Hello World!");
    console.log(e);
    console.log("----------------");
    console.log(e.target);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <h1>{id}</h1>
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>Reference example</button>
      <button onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
