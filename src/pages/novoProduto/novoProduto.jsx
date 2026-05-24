import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { FiUpload } from "react-icons/fi";

export default function EditarProduto({ produtos, setProdutos }) {
  const navigate = useNavigate();

  const [dadosInput, setDadosInput] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState(null);

  function handleCadastro(e) {
    const { name, value } = e.target;

    setDadosInput({
      ...dadosInput,
      [name]: value,
    });
  }

  //   Função disparada sempre que o usuário escolher um arquivo
  function handleFile(e) {
    // Pega o primeiro arquivo selecionado
    const arquivo = e.target.files[0];

    if (arquivo) {
      const urlTemporaria = URL.createObjectURL(arquivo);
      setImage(urlTemporaria);
    }
  }

  function handleSumbitCadastro(e) {
    e.preventDefault();

    console.log(dadosInput);
  }

  return (
    <div className="w-full flex">
      <div className="relative flex-col gap-4 flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md flex flex-col gap-4 justify-center items-center">
          <img
            src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
            width={80}
          />
          <div
            className="absolute inset-0 my-auto h-125"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
              filter: "blur(118px)",
              pointerEvents: "none",
            }}
          />
        </div>

        <div className="w-full p-3 rounded-lg flex flex-col items-center gap-2">
          {image ? (
            <img
              src={image}
              alt={dadosInput.title}
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
          ) : (
            <p className="text-white">Nenhuma foto selecionada.</p>
          )}

          <label className="w-48 px-4 py-2 flex items-center justify-center gap-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 rounded-lg duration-150 cursor-pointer">
            <div className="cursor-pointer">
              <FiUpload size={20} color="#FFF" />
            </div>

            <span>Upload</span>

            <input
              type="file"
              accept="image/*"
              className="hidden cursor-pointer"
              onChange={handleFile}
            />
          </label>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Cadastrar produto
            </h3>
          </div>
          <form onSubmit={handleSumbitCadastro} className="space-y-5">
            <div>
              <label className="font-medium">Titulo</label>
              <input
                type="text"
                name="title"
                onChange={handleCadastro}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Descrição</label>
              <input
                type="text"
                name="description"
                onChange={handleCadastro}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Preço</label>
              <input
                type="number"
                name="price"
                onChange={handleCadastro}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
