import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { team } from "../api";
import InicioPage from "./pages/inicio";
import LoginPage from "./pages/login";
import CadastroPage from "./pages/cadastro";
import MeusAnunciosPage from "./pages/meusAnunciosPage";
import DetalheAnuncioPage from "./pages/detalheAnuncio";
import EditarProduto from "./pages/editarProduto";

export default function App() {
  const [produtos, setProdutos] = useState(team);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage produtos={produtos} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route
          path="/meus-anuncios"
          element={<MeusAnunciosPage produtos={produtos} />}
        />
        <Route
          path="/editar-produto/:slugId"
          element={
            <EditarProduto produtos={produtos} setProdutos={setProdutos} />
          }
        />
        <Route path="/:slugId" element={<DetalheAnuncioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
