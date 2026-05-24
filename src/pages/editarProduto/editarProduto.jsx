import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditarProduto({ produtos, setProdutos }) {
  const { slugId } = useParams();
  const navigate = useNavigate();

  const produto = produtos.find((p) => `${p.slug}-${p.id}` === slugId);

  const [dadosInput, setDadosInput] = useState({
    title: produto.title,
    description: produto.description,
    price: produto.price,
  });

  if (!produto)
    return <p className="p-8 text-gray-600">Produto não encontrado.</p>;

  function handleEditarProduto(e) {
    const { value, name } = e.target;

    setDadosInput({
      ...dadosInput,
      [name]: value,
    });
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    const produtosAtualizados = produtos.map((item) => {
      if (`${item.slug}-${item.id}` === slugId) {
        return {
          ...item,
          title: dadosInput.title,
          description: dadosInput.description,
          price: Number(dadosInput.price),
        };
      }

      return item;
    });

    setProdutos(produtosAtualizados);
    navigate("/meus-anuncios");
  }

  return (
    <div className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <img
            src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
            width={80}
          />
          <div className="mt-16">
            <img
              src={produto.photo}
              className="w-full h-full object-contain object-center shadow-md rounded-xl"
            />
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-125"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Informações do produto
            </h3>
          </div>
          <form onSubmit={handleSubmitForm} className="space-y-5">
            <div>
              <label className="font-medium">Titulo</label>
              <input
                onChange={handleEditarProduto}
                type="text"
                name="title"
                value={dadosInput.title}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Descrição</label>
              <input
                onChange={handleEditarProduto}
                type="text"
                name="description"
                value={dadosInput.description}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Preço</label>
              <input
                onChange={handleEditarProduto}
                type="number"
                name="price"
                value={dadosInput.price}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
