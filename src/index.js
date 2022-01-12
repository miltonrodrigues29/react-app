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

function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "James Clear";
const Book = () => {
  const title = "Atomic Habits";
  return (
    <article className="book">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=""
      ></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};

const Message = () => {
  return <p>this is my message</p>;
};
//above is easy and readble than the below chain functions

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
//   return React.createElement("h1", {}, "Hello World");
// };

ReactDom.render(<Booklist />, document.getElementById("root"));
