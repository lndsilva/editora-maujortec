import React from "react";
import Home from "./Home";

const tituloPagina = "Últimos lançamentos";
const dados = [
  { isbn: "978-85-722-xxx-x", titulo: "React", autor: "Maujor" },
  { isbn: "978-85-722-776-3", titulo: "Designer UX", autor: "Will" },
  { isbn: "978-85-722-550-9", titulo: "Laravel para ninjas", autor: "Jack" },
];

const Principal = () => <Home dados={dados} tituloPagina={tituloPagina} />;

export default Principal;
