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

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt=""
  ></img>
);

const Title = () => <h1>Atomic Habits</h1>;
const Author = () => <h4>James Clear</h4>;

const Person = () => (
  <h2 style={{ color: "#617d98", fontSiz: "0.75rem", marginTo: "0.25rem" }}>
    Milton Rodrigues
  </h2>
);
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
