import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { team } from "../api";
import InicioPage from "./pages/home/inicio";
import LoginPage from "./pages/login/login";
import CadastroPage from "./pages/cadastro/cadastro";
import MeusAnunciosPage from "./pages/meusAnuncios/meusAnunciosPage";
import DetalheAnuncioPage from "./pages/detalheAnuncio/detalheAnuncio";
import EditarProduto from "./pages/editarProduto/editarProduto";
import NovoProduto from "./pages/novoProduto/novoProduto";

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
        <Route
          path="/novo-produto"
          element={
            <NovoProduto produtos={produtos} setProdutos={setProdutos} />
          }
        />
        <Route path="/:slugId" element={<DetalheAnuncioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
