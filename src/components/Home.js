import React, { Fragment } from "react";
import "../style.css";

const Home = (props) => {
  console.log(props);
  return (
    <>
      <h3>{props.tituloPagina}</h3>
      {props.dados.map((item, i) => (
        <p>
          ISBN: {props.dados[i].isbn}
          <br />
          Título: {props.dados[i].titulo}
          <br />
          Autor: {props.dados[i].autor}
        </p>
      ))}
    </>
  );
};
export default Home;
