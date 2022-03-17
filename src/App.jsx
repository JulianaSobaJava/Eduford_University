import React from "react";
import Rotas from "./routes";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/global.scss";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Rotas />
      <Footer />
    </Router>
  );
}
