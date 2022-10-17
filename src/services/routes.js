import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home"
import Erro from "../Component/Fragments/Erro/Erro"

export default function Rotas(){
  return(
    <Router>
        <Routes>
            <Route path="*" element={<Erro />}/>
            <Route path="/" element={<Home />}/>
        </Routes>
    </Router>
  )
}