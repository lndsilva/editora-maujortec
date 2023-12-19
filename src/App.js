import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route exact path="/" element={Home} />
          <Route exact path="/frontend" element={() => <Frontend />} />
          <Route exact path="/programacao" element={() => <Programacao />} />
          <Route exact path="/design" element={() => <Design />} />
          <Route exact path="/catalogo" element={(props) => <Catalogo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;
