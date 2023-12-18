import React, { Fragment } from "react";
import "../styles.css";

const Home = (props) => {
  console.log(props);
  return (
    <>
      <h3>{props.tituloPagina}</h3>
      <p>
        ISBN: {props.isbn}
        <br />
        Título: {props.titlo}
        <br />
        Autor: {props.autor}
        <br />
      </p>
    </>
  );
};
export default Home;
